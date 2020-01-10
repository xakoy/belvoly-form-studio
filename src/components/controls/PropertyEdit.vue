<template>
    <div>
        属性编辑器
        <component v-if="editControl.propertyEditor" :control="control" :is="editControl.propertyEditor"></component>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from './config'
import { IControl } from '.'

export default Vue.extend({
    props: ['config', 'control'],
    data () {
        return {
            label: ''
        }
    },
    computed: {
        editControl (): IControl {
            return this.control as IControl
        },
        options (): Config {
            return this.editControl.config
        }
    }
})
</script>
