<template>
    <div class="bfs-studio-design">
        <design-zone
            v-model="contentList"
            :placeholder="placeholder"
            @change="designContentChangeHandler"
            :currentEditControl="currentEditControl"
            @itemClick="controlClickHandler"
            @itemRemove="controlRemoveClickHandler"
            @itemAdd="controlAddedHandler"
        ></design-zone>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Watch } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import controls, { createControls } from '../controls'
import PropertyEdit from '../controls/PropertyEdit.vue'
import FormPropertyEdit from './FormPropertyEdit.vue'
import { DesignModel, DesignControlModel, IControl, FormPropertyModel } from '../interface'
import DesignZone from './DesignZone.vue'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_DESIGN, SYMBOL_FORM_PROPERTY_KEY, SYMBOL_EXTRA_KEY } from '../symbol'
import { SYM_DESIGN_PROP_KEY, DesignPubPropModel, CanMoveFunc } from './design-prop'
import { convertDesignControlModel, createControlInstance } from '../controls/controlUtil'
import { VNode } from 'vue'
const index = 1

@Component({
    name: 'BfsDesign',
    components: {
        DesignZone
    }
})
export default class Design extends Vue {
    @Prop() placeholder: string
    @Prop() canMove: CanMoveFunc
    @Prop({ default: true }) isNeedSuportDisplay: boolean
    @Prop({ default: true }) isPreventOnFilter: boolean
    /**
     * 设计器生成的模型数据，Viewer根据此模型数据渲染表单
     */
    @Prop() defaultModel
    /**
     * 所有的控件集合，如果不为空，则解析的控件从这些控件中查找
     */
    @Prop() allControls: IControl[]
    /**
     * 提供给控件的额外数据
     */
    @Prop({
        default: function() {
            return {}
        }
    })
    extra: any

    @Provide(SYMBOL_MODE_KEY) mode = SYMBOL_MODE_DESIGN
    @Provide(SYMBOL_EXTRA_KEY) extraProvider = this.extra

    @Provide(SYM_DESIGN_PROP_KEY)
    pubProp: DesignPubPropModel = {
        canMove: this.canMove,
        placeholder: this.placeholder,
        isNeedSuportDisplay: this.isNeedSuportDisplay,
        isPreventOnFilter: this.isPreventOnFilter,
        placeholderSlot: this.$slots.placeholder,
        layoutmoreSlot: this.$slots.layoutmore
    }

    list = controls
    contentList: IControl[] = []
    currentEditControl: any = null
    propertyTabName = 'control'

    mounted() {
        this.pubProp.placeholderSlot = this.$scopedSlots.placeholder
        this.pubProp.layoutmoreSlot = this.$scopedSlots.layoutmore
        if (this.defaultModel) {
            this.watchDefaultModel()
        }
    }

    @Watch('defaultModel')
    watchDefaultModel() {
        this.drawModelDesign()
    }
    @Watch('defaultControls')
    watchDefaultControls(val) {
        this.contentList = val
    }

    formProperty = {}

    setFormProperty(property) {
        Object.keys(property).forEach(key => {
            this.$set(this.formProperty, key, property[key])
        })
    }
    drawModelDesign() {
        if (this.defaultModel) {
            if (this.defaultModel.controls) {
                this.contentList = createControls(this.defaultModel, this.allControls)
            }
        } else {
            this.clear()
        }
    }

    controlClickHandler(control: IControl) {
        this.currentEditControl = control
        this.propertyTabName = 'control'
        this.$emit('itemClick', control)
    }
    controlAddedHandler(control: IControl) {
        this.currentEditControl = control
        this.$emit('itemAdd', control)
    }

    addControl(control: IControl) {
        const clone = createControlInstance(control)
        this.contentList.push(clone)
        this.controlAddedHandler(clone)
    }
    controlRemoveClickHandler(control: IControl) {
        this.currentEditControl = null
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
}
</script>

<style lang="less">
.bfs-studio-design {
    height: 100%;
}
</style>
