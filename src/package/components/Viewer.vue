<template>
    <div :class="{ 'bfs-mobile': mobile }">
        <template v-if="isForm">
            <el-form :model="item" ref="form">
                <viewer-zone :readonly="readonly" :formModel="item" :itemValueField="itemValueField" :controls="controls"></viewer-zone>
            </el-form>
        </template>
        <viewer-zone v-else :readonly="readonly" :formModel="item" :itemValueField="itemValueField" :controls="controls"></viewer-zone>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Provide, Watch } from 'vue-property-decorator'
import { createControls } from '../controls'
import { IControl } from '../interface'
import ViewerZone from './ViewerZone.vue'
import { Form } from 'element-ui'
import { SYMBOL_EXTRA_KEY } from '../symbol'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_VIEWER, SYMBOL_FORM_PROPERTY_KEY, SYMBOL_IN_MOBILE_KEY } from '../symbol'
import { ItemBindOptions, SYM_VIEW_PROP_KEY, ViewPubPropModel } from './view-prop'
import { findControl, getFieldName } from './viewerUtil'

@Component({
    components: {
        ViewerZone
    },
    provide() {
        return {}
    }
})
export default class FormViewer extends Vue {
    @Prop({ type: Boolean, default: true }) isForm: boolean
    /**
     * 设计器生成的模型数据，Viewer根据此模型数据渲染表单
     */
    @Prop() designModel!: any
    /**
     * 表单默认的数据，第一次有用
     */
    @Prop() defaultValue: any

    /**
     * 所有的控件集合，如果不为空，则解析的控件从这些控件中查找
     */
    @Prop() allControls: IControl[]

    /**
     * 表单元素根据控件属性的哪个字段获取值，默认 'id'
     */
    @Prop({ default: 'id' }) itemValueField!: string

    /**
     * 是否只读模式
     */
    @Prop({ default: false }) readonly readonly!: boolean

    /**
     * 移动模式
     */
    @Prop({ type: Boolean, default: false }) mobile!: boolean
    /**
     * 提供给控件的额外数据
     */
    @Prop({
        default: function() {
            return {}
        }
    })
    extra!: any

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

    formProperty = {}
    controls: IControl[] = []
    item = {}

    @Provide(SYMBOL_MODE_KEY) mode = SYMBOL_MODE_VIEWER
    @Provide(SYMBOL_FORM_PROPERTY_KEY) providerFormProperty = this.formProperty
    @Provide(SYMBOL_IN_MOBILE_KEY) providerInMobile = this.mobile
    @Provide(SYMBOL_EXTRA_KEY) providerExtra = this.extra
    @Provide(SYM_VIEW_PROP_KEY) pubProp = () => {
        return {
            itemBindOptions: this.itemBindOptions,
            viewer: this as any
        } as ViewPubPropModel
    }

    @Watch('defaultValue')
    watchDefaultValue() {
        if (this.defaultValue) {
            this.item = {
                ...this.defaultValue
            }
        }
    }

    init() {
        if (this.designModel) {
            this.controls = createControls(this.designModel, this.allControls)
            // 将form 属性，通过provide注入到子孙元素上
            const { form } = this.designModel
            Object.keys(form).forEach(key => {
                this.$set(this.formProperty, key, form[key])
            })
            this.watchDefaultValue()
        }
    }

    mounted() {
        this.init()
    }

    getData() {
        return this.item
    }

    validate() {
        const from = this.$refs.form as Form
        return from.validate()
    }

    getControlValue(control: IControl) {
        return this.item[getFieldName(control, this.itemValueField)]
    }

    getControl(id: string): IControl {
        return findControl(this.controls, item => item.id === id)
    }
}
</script>

<style lang="less">
.bfs-mobile {
}
</style>
