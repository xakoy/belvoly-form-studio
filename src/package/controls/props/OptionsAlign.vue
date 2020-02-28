<template>
    <basic label="布局方式">
        <el-radio-group v-model="options.prop.optionsAlign">
            <el-radio-button label="block">块级</el-radio-button>
            <el-radio-button label="inline-block">行内</el-radio-button>
            <el-radio-button label="select">下拉框</el-radio-button>
        </el-radio-group>
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
        return {
            label: ''
        }
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
