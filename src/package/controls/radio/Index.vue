<template>
    <basic :config="config">
        <el-radio-group v-if="!isSelectLayout" :value="value" @input="$emit('input', $event)">
            <el-radio v-for="(item, index) in items" :key="index" :label="item.value" :style="{display: prop.optionsAlign == 'inline-block' ? 'inline-block' : 'block'}">{{item.text}}</el-radio>
        </el-radio-group>
        <el-select v-else size="small" :value="value" @change="$emit('input', $event)">
            <el-option v-for="(item, index) in items" :key="index" :value="item.value" :label="item.text"></el-option>
        </el-select>
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
        },
        isSelectLayout () {
            return this.prop.optionsAlign === 'select'
        }
    }
})
</script>
