<template>
    <basic :config="config">
        <el-input :value="value" @input="$emit('input', $event)" placeholder="请填写文本内容" :maxlength="options.prop.maxLength" />
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
    data () {
        return {
        }
    },
    computed: {
        options () {
            return this.config as Config
        }
    }
})
</script>
