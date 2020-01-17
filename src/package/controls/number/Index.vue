<template>
    <basic :config="config">
        <el-input-number :value="value" @input="$emit('input', $event)"  placeholder="请填写数值" />
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
        }
    }
})
</script>
