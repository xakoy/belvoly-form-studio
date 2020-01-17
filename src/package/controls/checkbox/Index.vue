<template>
    <basic :config="config">
        <el-checkbox-group v-model="val" @change="changeHandler">
            <el-checkbox v-for="(item, index) in items" :key="index" :label="item.value" :style="{display: prop.optionsAlign == 'inline-block' ? 'inline-block' : 'block'}">{{item.text}}</el-checkbox>
        </el-checkbox-group>
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
            val: []
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
    },
    watch: {
        value () {
            this.val = this.value || []
        }
    },
    methods: {
        changeHandler (value) {
            this.$emit('input', value)
        }
    }
})
</script>
