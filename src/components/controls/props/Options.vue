<template>
    <basic label="选项">
        <ul class="options">
            <li  v-for="item in options.prop.options" :key="item.value">
                <i class="el-icon-menu"></i>
                <el-input size="small" v-model="item.value" />
                <i class="el-icon-close"></i>
            </li>
        </ul>
        <div>
            <el-link @click="addClickHandler" :underline="false" type="primary"><i class="el-icon-plus"></i> 添加选项</el-link>
        </div>
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
            index: 4,
            label: ''
        }
    },
    computed: {
        editControl (): IControl {
            return this.control as IControl
        },
        options (): Config {
            return this.editControl.config
        }
    },
    methods: {
        addClickHandler () {
            const text = '选项' + this.index
            this.options.prop.options.push({ text: text, value: text })
            this.index = this.index + 1
        }
    }
})
</script>

<style lang="less" scoped>
.options {
    li {
        display: flex;
        line-height: 32px;
        i {
            font-size: 16px;
            padding-top: 7px;
            width: 24px;
        }
        padding: 5px 0;
    }
}
</style>
