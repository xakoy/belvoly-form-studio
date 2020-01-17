<template>
    <div>
        <el-form :model="item" ref="form">
            <viewer-zone :formModel="item" :itemValueField="itemValueField" :controls="controls"></viewer-zone>
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
import { SYMBOL_MODE_KEY, SYMBOL_MODE_VIEWER } from '../symbol'

@Component({
    components: {
        ViewerZone
    },
    provide: {
        [SYMBOL_MODE_KEY]: SYMBOL_MODE_VIEWER
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

    getData () {
        return this.item
    }

    validate () {
        const from = this.$refs.form as Form
        return from.validate()
    }
}
</script>
