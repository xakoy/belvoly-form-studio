<template>
    <div>
        <el-select v-model="rule.type" size="small" placeholder="可选，验证类型">
            <el-option v-for="item in items" :key="item.type" :label="item.text" :value="item.type"></el-option>
        </el-select>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IControl, Config } from '../../config'

export default Vue.extend({
    props: ['control'],
    data () {
        return {
            items: [
                { text: 'URL地址', type: 'url' },
                { text: 'Email地址', type: 'email' }
            ]
        }
    },
    computed: {
        editControl (): IControl {
            return this.control as IControl
        },
        rule (): any {
            return this.editControl.config.prop.rule
        }
    }
})
</script>
