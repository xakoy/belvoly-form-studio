<template>
    <div :class="{ 'bfs-mobile': mobile }">
        <el-form :model="item" ref="form">
            <viewer-zone :readonly="readonly" :formModel="item" :itemValueField="itemValueField" :controls="controls"></viewer-zone>
        </el-form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { createControls } from '../controls'
import { IControl } from '../interface'
import ViewerZone from './ViewerZone.vue'
import { Form } from 'element-ui'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_VIEWER, SYMBOL_FORM_PROPERTY_KEY, SYMBOL_IN_MOBILE_KEY } from '../symbol'

@Component({
    components: {
        ViewerZone
    },
    provide() {
        return {
            [SYMBOL_MODE_KEY]: SYMBOL_MODE_VIEWER,
            [SYMBOL_FORM_PROPERTY_KEY]: this.formProperty,
            [SYMBOL_IN_MOBILE_KEY]: this.mobile
        }
    }
})
export default class FormViewer extends Vue {
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
    @Prop(Boolean) mobile: boolean

    formProperty = {}
    controls: IControl[] = []
    item = {}

    init() {
        if (this.designModel) {
            this.controls = createControls(this.designModel, this.allControls)
            // 将form 属性，通过provide注入到子孙元素上
            const { form } = this.designModel
            Object.keys(form).forEach(key => {
                this.$set(this.formProperty, key, form[key])
            })
        }
        if (this.defaultValue) {
            this.item = this.defaultValue
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
}
</script>

<style lang="less">
.bfs-mobile {
}
</style>
