<template>
    <basic label="未填写内容提示">
        <el-input size="small" v-model="options.prop.placeholder"></el-input>
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from '../config'
import { IControl } from '../index'
import Basic from './Basic.vue'

export default Vue.extend({
    components: {
        Basic
    },
    props: ['config', 'control'],
    data() {
        return {}
    },
    computed: {
        editControl(): IControl {
            return this.control as IControl
        },
        options(): Config {
            return this.editControl.config
        }
    }
})
</script>
