<template>
    <basic :config="config">
        <el-input v-model="val" placeholder="请填写文本内容" :maxlength="options.prop.maxLength" />
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import Basic from '../Basic.vue'
import { Config } from '../config'

export default Vue.extend({
    props: ['config'],
    components: {
        Basic
    },
    data () {
        return {
            val: ''
        }
    },
    computed: {
        options () {
            return this.config as Config
        }
    }
})
</script>
