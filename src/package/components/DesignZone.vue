<template>
    <div class="bfs-design-zone" :class="{ 'bfs-design-zone-designmode': isNeedSuportDisplay }">
        <div class="bfs-design-zone-tip" v-if="!list.length">
            <el v-if="designPubProp.placeholderSlot" :content="designPubProp.placeholderSlot" :zone="this" />
            <p v-else>{{ placeholder || designPubProp.placeholder || '点击或拖动左侧控件到该区域' }}</p>
            <!-- <p>创建表单</p> -->
        </div>
        <draggable class="bfs-design-zone-drag" v-model="list" :delay="0" v-bind="dragOptions" group="design-zone" @start="dragStartHandler" @end="dragEndHandler" @add="addHandler">
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                <div
                    class="bfs-design-item-container"
                    :name="item.config.name"
                    :class="{ 'bfs-design-item-container-active': currentEditControl === item, 'bfs-design-item-container-layout': item.config.isLayout }"
                    @click.stop="controlClickHandler(item, $event)"
                    @dblclick.stop="controlDbClickHandler(item, $event)"
                    v-for="item in list"
                    :key="item.id"
                >
                    <component
                        :is="item.component"
                        :config="item.config"
                        :control="item"
                        :currentEditControl="currentEditControl"
                        :class="canMove(item) ? '' : 'filtered'"
                        :extra="extraInject"
                        @itemDbClick="childControlDbClickHandler"
                        @itemClick="childControlClickHandler"
                        @itemRemove="childControlRemoveClickHandler"
                        @itemAdd="childControlAddedHandler"
                        @layoutChange="layoutControlChangeHandler"
                    >
                    </component>
                    <div class="bfs-design-item-container-placeholder" v-if="!item.config.isLayout"></div>
                    <div class="bfs-design-item-container-editarea">
                        <strong>当前编辑：</strong>
                        <span>
                            <el-tooltip content="删除">
                                <i class="el-icon-delete" @click.stop="controlRemoveClickHandler(item, $event)"></i>
                            </el-tooltip>
                        </span>
                    </div>
                </div>
            </transition-group>
        </draggable>
        <slot name="layoutmore" v-if="designPubProp.layoutmoreSlot">
            <el :content="designPubProp.layoutmoreSlot" :zone="this" />
        </slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject, Watch } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import { IControl } from '../interface'
import { SYM_DESIGN_PROP_KEY, DesignPubPropModel } from './design-prop'
import { SYMBOL_DESIGN_CANADD_KEY, SYMBOL_EXTRA_KEY } from '../symbol'
import { createControlInstance } from '../controls/controlUtil'
import el from './el'
import { Tooltip } from 'element-ui'

@Component({
    name: 'BfsDesignZone',
    components: {
        draggable,
        el,
        ElTooltip: Tooltip
    }
})
export default class DesignZone extends Vue {
    @Prop() currentEditControl
    @Prop() value
    @Prop() placeholder

    list = []
    drag = false

    @Inject({ from: SYM_DESIGN_PROP_KEY, default: { isNeedSuportDisplay: true, isPreventOnFilter: true, dragOptions: {} } }) designPubProp: DesignPubPropModel
    @Inject({ from: SYMBOL_DESIGN_CANADD_KEY, default: null }) canAdd: Function
    @Inject({ from: SYMBOL_EXTRA_KEY, default: {} }) extraInject: any

    get dragOptions() {
        return {
            animation: 200,
            disabled: false,
            filter: '.filtered',
            preventOnFilter: this.isPreventOnFilter,
            ghostClass: 'bfs-design-zone-ghost',
            dragClass: 'bfs-design-zone-curdrag',
            chosenClass: 'bfs-design-zone-chosen',
            ...this.designPubProp.dragOptions
        }
    }

    get isPreventOnFilter() {
        return this.designPubProp.isPreventOnFilter
    }

    get isNeedSuportDisplay() {
        return this.designPubProp.isNeedSuportDisplay
    }

    mounted() {}

    @Watch('value')
    valueWatch(val, oldVal) {
        this.list = val
    }

    @Watch('list')
    listWatch(val, oldVal) {
        if (val !== this.value) {
            this.$emit('input', this.list)
            this.$emit('change', this.list)
        }
    }

    async addHandler({ newIndex }) {
        const control = this.list[newIndex]
        if (this.canAdd) {
            const can = await this.canAdd()
            if (can === false) {
                this.removeControl(control, {
                    zone: this,
                    event: null
                })
                return
            }
        }

        this.controlAddedHandler(control)
    }

    dragStartHandler() {
        this.drag = true
        this.designPubProp.dragStart && this.designPubProp.dragStart()
    }

    dragEndHandler() {
        console.log(1)

        this.drag = false
        this.designPubProp.dragEnd && this.designPubProp.dragEnd()
    }

    addControl(control: IControl) {
        const clone = createControlInstance(control)
        this.list.push(clone)
        this.add(clone)
    }

    add(control: IControl) {
        this.controlAddedHandler(control)

        this.$emit('input', this.list)
        this.$emit('change', this.list)
    }

    removeControl(control: IControl, extraData: any) {
        const index = this.list.indexOf(control)
        if (index > -1) {
            this.list.splice(index, 1)
        }
        this.$emit('itemRemove', control, extraData)
        this.$emit('input', this.list)
        this.$emit('change', this.list)
    }

    controlClickHandler(control: IControl, event: Event) {
        this.$emit('itemClick', control, {
            zone: this,
            event: event
        })
    }

    controlDbClickHandler(control: IControl, event: Event) {
        this.$emit('itemDbClick', control, {
            zone: this,
            event: event
        })
    }

    canMove(control: IControl) {
        const { canMove } = this.designPubProp
        if (canMove) {
            return canMove(control)
        }
        return true
    }

    controlRemoveClickHandler(control: IControl, event: Event) {
        this.removeControl(control, {
            zone: this,
            event: event
        })
    }

    controlAddedHandler(control: IControl) {
        this.$emit('itemAdd', control, {
            zone: this
        })
    }

    childControlDbClickHandler(...params) {
        this.$emit('itemDbClick', ...params)
    }

    childControlClickHandler(...params) {
        this.$emit('itemClick', ...params)
    }

    childControlAddedHandler(...params) {
        this.$emit('itemAdd', ...params)
    }

    childControlRemoveClickHandler(control: IControl, extraData: any) {
        this.removeControl(control, extraData)
    }

    layoutControlChangeHandler() {
        this.$emit('change', this.list)
    }

    beforeControl(control: IControl, currentControl: IControl) {
        const index = this.list.indexOf(currentControl)
        if (index > -1) {
            const clone = createControlInstance(control)
            if (index === 0) {
                this.list.unshift(clone)
            } else {
                this.list.splice(index, 0, clone)
            }
            this.add(clone)
        }
    }

    replaceControl(control: IControl, currentControl: IControl) {
        const index = this.list.indexOf(currentControl)
        if (index > -1) {
            const clone = createControlInstance(control)
            this.list.splice(index, 1, clone)
            this.add(clone)
            this.removeControl(currentControl, {
                zone: this,
                event: null
            })
        }
    }

    afterControl(control: IControl, currentControl: IControl) {
        const index = this.list.indexOf(currentControl)
        if (index > -1) {
            const clone = createControlInstance(control)

            this.list.splice(index + 1, 0, clone)
            this.add(clone)
        }
    }
}
</script>

<style lang="less">
.bfs-design-zone {
    height: 100%;
    position: relative;
}

.bfs-design-item-container {
    position: relative;
    &-placeholder {
        display: none;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        opacity: 0.1;
        z-index: 2;
        background: #fff;
    }

    &-editarea {
        display: none;
        position: absolute;
        z-index: 3;
        top: -7px;
        width: 100%;
        line-height: 1;

        strong {
            font-weight: normal;
            font-size: 12px;
            float: left;
            margin-left: 5px;
            padding: 0 5px;
            background: #fff;
        }
        span {
            float: right;
            margin-right: 10px;
            background: #fff;
            cursor: pointer;
        }
    }
}

.bfs-design-zone {
    display: flex;
    flex-direction: column;
    &-tip {
        position: absolute;
        border: 1px dashed #ccc;
        border-radius: 5px;
        width: 90%;
        margin: auto;
        left: 0;
        right: 0;
        padding: 5% 0;
        margin-top: 10%;
        text-align: center;
        color: #999;
        z-index: -1;
    }
    &-drag {
        flex: 1 1 auto;
        height: 100%;
        > span {
            height: 100%;
            // overflow: auto;
            display: block;
            min-height: 50px;
        }
    }

    &-ghost {
        background-color: #e3f3ff;
    }
}
.bfs-design-zone-designmode {
    .bfs-design-item-container {
        min-height: 50px;
        &:hover {
            background-color: #f1f2f3;
        }
        &-placeholder {
            display: block;
        }

        &-active {
            border: 1px dashed red;
        }
        &-active > .bfs-design-item-container-editarea {
            display: block !important;
        }
        &-layout {
            &:hover {
                background-color: transparent;
            }
        }
    }
    .bfs-design-zone {
        &-drag {
            > span {
                min-height: 200px;
                // padding: 20px 10px;
            }
        }
    }
}
</style>
