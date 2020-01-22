<template>
    <span>未识别的控件, 控件类型：{{ options.config.name }}}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from '../config'

export default Vue.extend({
    props: ['config'],
    computed: {
        options (): Config {
            return this.config as Config
        },
        prop (): any {
            return this.options.prop
        }
    }
})
</script>
