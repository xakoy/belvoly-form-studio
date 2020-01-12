<template>
    <div>
        <el-form :model="item" ref="form">
            <form-item v-model="item[control.id]" v-for="control in controls" :key="control.id" :control="control"></form-item>
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
    @Prop() designModel: any;

    controls: IControl[] = []
    item = {}

    init () {
        if (this.designModel) {
            this.controls = createControls(this.designModel)
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
