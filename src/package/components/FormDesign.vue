<template>
    <div class="bfs-design">
        <div class="bfs-design-sider">
            <div class="bfs-design-controls-area">
                <h4>常用控件</h4>
                <design-draggable class="bfs-design-controls" :controls="list" :begin-index.sync="index">
                    <template v-slot:default="{ control }">
                        <div :key="control.config.name" class="bfs-design-controls__item" data-bfs-type="Text">
                            <div class="bfs-design-controls__item--label">
                                <i :class="control.config.icon"></i>
                                <span>{{ control.config.text }}</span>
                            </div>
                        </div>
                    </template>
                </design-draggable>
            </div>
        </div>
        <div class="bfs-design-content">
            <design-zone
                ref="zone"
                v-model="contentList"
                @change="designContentChangeHandler"
                :currentEditControl="currentEditControl"
                @itemClick="controlClickHandler"
                @itemRemove="controlRemoveClickHandler"
                @itemAdd="controlAddedHandler"
                @itemDbClick="controlDbClickHandler"
            ></design-zone>
        </div>
        <div class="bfs-design-property-editor">
            <el-tabs v-model="propertyTabName">
                <el-tab-pane label="控件属性设置" name="control">
                    <property-edit ref="propertyEdit" v-if="currentEditControl" :control="currentEditControl" :key="currentEditControl.id"></property-edit>
                </el-tab-pane>
                <el-tab-pane label="表单属性设置" name="form">
                    <form-property-edit :value="formProperty"></form-property-edit>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Watch } from 'vue-property-decorator'
import controls, { createControls } from '../controls'
import PropertyEdit from '../controls/PropertyEdit.vue'
import FormPropertyEdit from './FormPropertyEdit.vue'
import { DesignModel, DesignControlModel, IControl, FormPropertyModel } from '../interface'
import DesignZone from './DesignZone.vue'
import DesignDraggable from './DesignDraggable.vue'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_DESIGN, SYMBOL_FORM_PROPERTY_KEY, SYMBOL_DESIGN_CANADD_KEY, SYMBOL_EXTRA_KEY } from '../symbol'
import { convertDesignControlModel } from '../controls/controlUtil'
import { Message } from 'element-ui'
import { CanMoveFunc, CanEdit, DesignPubPropModel, ItemBindOptions, SYM_DESIGN_PROP_KEY } from './design-prop'

const DEFAULT_FORM_PROPERTY: FormPropertyModel = {
    showRequiredAsterisk: true,
    labelPosition: 'top',
    labelWidth: 80
}

@Component({
    name: 'BfsFormDesign',
    components: {
        PropertyEdit,
        FormPropertyEdit,
        DesignZone,
        DesignDraggable
    }
})
export default class FormDesign extends Vue {
    @Prop() placeholder!: string
    @Prop({ type: [Boolean, Object], default: true }) canEdit!: CanEdit
    @Prop() canMove!: CanMoveFunc
    @Prop({ default: true }) isNeedSuportDisplay!: boolean
    @Prop({ default: true }) isPreventOnFilter!: boolean

    @Prop({
        default: function() {
            return {}
        }
    })
    defaultModel: any
    /**
     * 是否启用属性验证
     */
    @Prop({
        type: Boolean,
        default: false
    })
    enablePropertyValid: boolean
    /**
     * 提供给控件的额外数据
     */
    @Prop({
        type: Object,
        default: function() {
            return {}
        }
    })
    extra!: any

    /**
     * 拖动的选项
     */
    @Prop() dragOptions!: any

    /**
     * 每个元素的Option
     */
    @Prop({
        default: function() {
            return function() {
                return {}
            }
        }
    })
    itemBindOptions!: ItemBindOptions

    index = 1
    list = controls
    contentList: IControl[] = []
    drag = false
    currentEditControl = null
    propertyTabName = 'control'
    formProperty = { ...DEFAULT_FORM_PROPERTY }

    @Provide(SYMBOL_MODE_KEY) mode = SYMBOL_MODE_DESIGN
    @Provide(SYMBOL_FORM_PROPERTY_KEY) providerFormProperty = this.formProperty
    @Provide(SYMBOL_EXTRA_KEY) extraProvider = this.extra
    @Provide(SYMBOL_DESIGN_CANADD_KEY) providerCanAdd = this.canAdd
    @Provide(SYM_DESIGN_PROP_KEY)
    pubProp: DesignPubPropModel = {
        canEdit: this.canEdit,
        canMove: this.canMove,
        placeholder: this.placeholder,
        isNeedSuportDisplay: this.isNeedSuportDisplay,
        isPreventOnFilter: this.isPreventOnFilter,
        placeholderSlot: this.$slots.placeholder,
        layoutmoreSlot: this.$slots.layoutmore,
        dragStart: this.moveStartHandler,
        dragEnd: this.moveEndHandler,
        dragOptions: this.dragOptions,
        itemBindOptions: this.itemBindOptions
    }

    @Watch('defaultModel')
    watchDefaultModel() {
        this.drawModelDesign()
    }

    mounted() {
        this.pubProp.placeholderSlot = this.$scopedSlots.placeholder
        this.pubProp.layoutmoreSlot = this.$scopedSlots.layoutmore
        if (this.defaultModel) {
            this.watchDefaultModel()
        }
    }

    moveStartHandler() {
        this.$emit('dragStart')
    }

    moveEndHandler() {
        this.$emit('dragEnd')
    }

    setFormProperty(property) {
        Object.keys(property).forEach(key => {
            this.$set(this.formProperty, key, property[key])
        })
    }
    drawModelDesign() {
        if (this.defaultModel) {
            if (this.defaultModel.controls) {
                this.contentList = createControls(this.defaultModel)
            }

            // 初始化表单属性
            const defautFormProperty = { ...DEFAULT_FORM_PROPERTY }
            this.setFormProperty(defautFormProperty)

            // 将form 属性，通过provide注入到子孙元素上
            const { form } = this.defaultModel
            if (form) {
                this.setFormProperty(form)
            }
        } else {
            this.clear()
        }
    }
    async controlClickHandler(control: IControl, extra) {
        const isValid = await this.currentValidte()

        if (isValid) {
            this.currentEditControl = control
            this.propertyTabName = 'control'
        } else {
            Message.error({ message: '当前控件的属性验证不通过，不能切换到其它的控件，请查看属性' })
        }
        this.$emit('itemClick', control, extra)
    }
    controlDbClickHandler(control: IControl, extra) {
        this.$emit('itemDbClick', control, extra)
    }
    controlRemoveClickHandler(control: IControl, extra) {
        if (this.currentEditControl === control) {
            this.currentEditControl = null
        }
    }
    controlAddedHandler(control: IControl, extra) {
        this.currentEditControl = control
        this.$emit('itemAdd', control, extra)
    }
    designContentChangeHandler() {
        this.$emit('change')
    }
    getModel() {
        const model: DesignModel = {
            controls: this.contentList.map(c => convertDesignControlModel(c)),
            form: { ...this.formProperty }
        }
        return model
    }
    clear() {
        this.contentList = []
        this.currentEditControl = null
    }
    async canAdd() {
        const isValid = await this.currentValidte()
        if (isValid) {
            return true
        }

        Message.error({ message: '当前控件的属性验证不通过，不能添加新的控件，请查看属性' })
        return false
    }
    async currentValidte() {
        if (!this.enablePropertyValid) {
            return true
        }
        if (!this.currentEditControl) {
            return true
        }
        const propertyEdit: any = this.$refs.propertyEdit
        const isValid = await propertyEdit.validate()
        return isValid
    }
    async validate() {
        return await this.currentValidte()
    }
}
</script>

<style lang="less">
.bfs-design {
    height: 100%;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex: 1;
    > h3 {
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        padding: 0px 24px;
        font-weight: normal;
        font-size: 16px;
        text-align: left;
        position: absolute;
        width: 100%;
    }
    &-sider {
        background: #f1f2f3;
        width: 300px;
        font-size: 12px;
        flex-shrink: 0;
    }
    &-controls-area {
        padding: 26px 20px;
        h4 {
            font-size: 13px;
            line-height: 1;
        }
    }
    &-controls {
        margin: 12px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &__item {
            width: 124px;
            box-sizing: border-box;
            line-height: 36px;
            margin-bottom: 12px;
            padding-left: 12px;
            list-style: none;
            position: relative;
            background-color: #fff;
            border: 1px solid transparent;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.16);
            border-radius: 4px;
            font-size: 13px;
            cursor: grab;
            &:hover,
            &.active {
                border-color: #2196f3;
                color: #2196f3;
            }

            i {
                display: inline-block;
                width: 25px;
                font-size: 16px;
            }
        }
    }
    &-property-editor {
        width: 350px;
        background-color: #fcfdfe;
        flex-shrink: 0;
        height: 100%;

        .el-tabs {
            height: 100%;
            display: flex;
            flex-direction: column;
            .el-tabs__header {
                margin-top: 15px;
                margin-bottom: 0;
            }
            .el-tabs__content {
                flex: 1;
            }
            .el-tab-pane {
                height: 100%;
                > div {
                    height: 100%;
                    overflow: auto;
                    padding: 10px 15px;
                }
            }
            .el-tabs__nav-wrap {
                padding-left: 20px;
            }
        }
    }
    &-content {
        height: 100%;
        padding: 10px 0;
        flex: 1;
        border-right: 1px solid rgb(234, 234, 234);
        position: relative;
        overflow: auto;
    }
}
</style>
