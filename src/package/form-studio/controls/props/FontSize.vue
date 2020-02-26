<template>
    <basic label="字号">
        <el-select size="small" v-model="options.prop.fontsize">
            <el-option v-for="size in sizes" :label="size" :value="size" :key="size"></el-option>
        </el-select>
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
            sizes: [14, 18, 25, 32, 58],
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
