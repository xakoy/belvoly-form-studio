<template>
    <div>
        <el-form :model="item" ref="form">
            <form-item v-model="item[getFieldName(control)]" :fieldName="getFieldName(control)" v-for="control in controls" :key="control.id" :control="control"></form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { IControl, createControls } from './controls'
import FormItem from './FormItem.vue'
import { Form } from 'element-ui'

@Component({
    components: {
        FormItem
    }
})
export default class FormViewer extends Vue {
    /**
     * 设计器生成的模型数据，Viewer根据此模型数据渲染表单
     */
    @Prop() designModel!: any;
    /**
     * 表单默认的数据，第一次有用
     */
    @Prop() defaultValue: any;

    /**
     * 表单元素根据控件属性的哪个字段获取值，默认 'id'
     */
    @Prop({ default: 'id' }) itemValueField!: string

    controls: IControl[] = []
    item = {}

    init () {
        if (this.designModel) {
            this.controls = createControls(this.designModel)
        }
        if (this.defaultValue) {
            this.item = this.defaultValue
        }
    }

    mounted () {
        this.init()
    }

    getFieldName (control: IControl) {
        if (this.itemValueField === 'id') {
            return control.id
        }
        return control.config.prop[this.itemValueField]
    }

    getData () {
        return this.item
    }

    validate () {
        const from = this.$refs.form as Form
        return from.validate()
    }
}
</script>
