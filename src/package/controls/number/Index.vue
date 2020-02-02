<template>
    <basic :config="config">
        <el-input-number :value="value" @input="$emit('input', $event)"  :placeholder="placeholder" />
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import Basic from '../Basic.vue'
import { Config } from '../config'

export default Vue.extend({
    props: ['config', 'value'],
    components: {
        Basic
    },
    computed: {
        options () {
            return this.config as Config
        },
        prop () {
            return this.options.prop
        },
        placeholder () {
            return this.prop.placeholder || '请填写数值'
        }
    }
})
</script>
