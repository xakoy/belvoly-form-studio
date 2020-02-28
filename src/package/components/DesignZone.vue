<template>
    <div class="bfs-design-zone" :class="{ 'bfs-design-zone-designmode': isNeedSuportDisplay }">
        <div class="bfs-design-zone-tip" v-if="!list.length">
            <p>{{ placeholder || designPubProp.placeholder || '点击或拖动左侧组件到该区域' }}</p>
            <!-- <p>创建表单</p> -->
        </div>
        <draggable class="bfs-design-zone-drag" v-model="list" v-bind="dragOptions" group="design-zone" @start="drag = true" @end="dragEndHandler">
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                <div
                    class="bfs-design-item-container"
                    :class="{ 'bfs-design-item-container-active': currentEditControl === item, 'bfs-design-item-container-layout': item.config.isLayout }"
                    @click.stop="controlClickHandler(item)"
                    v-for="item in list"
                    :key="item.id"
                >
                    <component
                        :is="item.component"
                        :config="item.config"
                        :control="item"
                        :currentEditControl="currentEditControl"
                        :class="canMove(item) ? '' : 'filtered'"
                        @itemClick="controlClickHandler"
                        @itemRemove="controlRemoveClickHandler"
                    >
                    </component>
                    <div class="bfs-design-item-container-placeholder" v-if="!item.config.isLayout"></div>
                    <div class="bfs-design-item-container-editarea">
                        <strong>当前编辑：</strong>
                        <span>
                            <el-tooltip content="删除">
                                <i class="el-icon-delete" @click.stop="controlRemoveClickHandler(item)"></i>
                            </el-tooltip>
                        </span>
                    </div>
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject, Watch } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import { IControl } from '../interface'
import { SYM_DESIGN_PROP_KEY, DesignPubPropModel } from './design-prop'

@Component({
    components: {
        draggable
    }
})
export default class DesignZone extends Vue {
    @Prop() currentEditControl
    @Prop() value
    @Prop() placeholder

    list = []
    drag = false

    @Inject({ from: SYM_DESIGN_PROP_KEY, default: { isNeedSuportDisplay: true } }) designPubProp: DesignPubPropModel

    get dragOptions() {
        return {
            animation: 200,
            disabled: false,
            filter: '.filtered',
            ghostClass: 'bfs-design-zone-ghost'
        }
    }

    get isNeedSuportDisplay() {
        return this.designPubProp.isNeedSuportDisplay
    }

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

    dragEndHandler() {
        this.drag = false
    }

    controlClickHandler(control: IControl) {
        this.$emit('itemClick', control)
    }

    canMove(control: IControl) {
        const { canMove } = this.designPubProp
        if (canMove) {
            return canMove(control)
        }
        return true
    }

    controlRemoveClickHandler(control: IControl) {
        const index = this.list.indexOf(control)
        if (index > -1) {
            this.list.splice(index, 1)
        }
        this.$emit('itemRemove', control)
        this.$emit('input', this.list)
        this.$emit('change', this.list)
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
