<template>
    <basic :config="config">
        <el-input :value="value" @input="$emit('input', $event)" :placeholder="placeholder" :maxlength="options.prop.maxLength" />
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
        },
        prop () {
            return this.options.prop
        },
        placeholder () {
            return this.prop.placeholder || '请填写内容'
        }
    },
    methods: {
    }
})
</script>
