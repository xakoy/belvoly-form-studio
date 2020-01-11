<template>
    <div>
        <component v-model="item[control.id]" v-for="control in controls" :key="control.id" :is="control.component" :config="control.config"></component>
        <el-button @click="saveHandler">
            保存
        </el-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { IControl, createControls } from './controls'

@Component
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

    saveHandler () {
        const data = this.getData()
        this.$message.success(JSON.stringify(data))
    }
}
</script>
