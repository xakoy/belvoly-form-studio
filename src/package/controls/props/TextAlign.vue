<template>
    <basic label="文本对齐方式">
        <el-select v-model="options.prop.textAlign" size="small">
            <el-option v-for="item in items" :key="item.value" :value="item.value" :label="item.text"></el-option>
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
    data () {
        return {
            items: [
                { text: '左对齐', value: 'left' },
                { text: '居中对齐', value: 'center' },
                { text: '右对齐', value: 'right' }
            ]
        }
    },
    computed: {
        editControl (): IControl {
            return this.control as IControl
        },
        options (): Config {
            return this.editControl.config
        }
    }
})
</script>
