<template>
    <div>
        <component v-for="item in controls" :key="item.id" :is="item.component" :config="item.config"></component>
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

    init () {
        if (this.designModel) {
            this.controls = createControls(this.designModel)
        }
    }

    mounted () {
        this.init()
    }
}
</script>
