<template>
    <basic :config="config">
        <el-radio-group :value="value" @input="$emit('input', $event)">
            <el-radio v-for="(item, index) in items" :key="index" :label="item.value" :style="{display: prop.optionsAlign == 'inline-block' ? 'inline-block' : 'block'}">{{item.text}}</el-radio>
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
    props: ['config', 'value'],
    data () {
        return {
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
