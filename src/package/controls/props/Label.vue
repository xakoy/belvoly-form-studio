<template>
    <basic label="标签" :property="property">
        <el-input size="small" v-model="options.prop.label"></el-input>
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
    props: ['config', 'control', 'property'],
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
