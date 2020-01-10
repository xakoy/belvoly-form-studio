<template>
    <basic :config="config">
        <el-radio-group v-model="val">
            <el-radio v-for="(item, index) in items" :key="index" :label="item.value">{{item.text}}</el-radio>
        </el-radio-group>
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from '../config'
import Basic from '../Basic.vue'

export default Vue.extend({
    components: {
        Basic
    },
    props: ['config'],
    data () {
        return {
            val: ''
        }
    },
    computed: {
        options (): Config {
            return this.config as Config
        },
        prop (): any {
            return this.options.prop
        },
        items (): any {
            return this.prop.options
        }
    }
})
</script>
