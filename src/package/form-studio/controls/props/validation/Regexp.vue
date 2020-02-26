<template>
    <!-- <el-row>
        <el-col :span="6">正则表达式</el-col>
        <el-col :span="18"><el-input  size="small" v-model="rule.regexp"></el-input></el-col>
    </el-row> -->
    <el-input size="small" v-model="rule.regexp" placeholder="表达式">
        <template slot="prepend">正则</template>
    </el-input>
</template>

<script lang="ts">
import Vue from 'vue'
import { IControl, Config } from '../../config'

export default Vue.extend({
    props: ['control'],
    data() {
        return {}
    },
    computed: {
        editControl(): IControl {
            return this.control as IControl
        },
        rule(): any {
            return this.editControl.config.rule
        }
    }
})
</script>
