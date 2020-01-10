<template>
    <div>
        <h5>文本对齐方式</h5>
        <div>
            <select v-model="options.prop.textAlign">
                <option v-for="item in items" :key="item.value" :value="item.value">{{item.text}}</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from '../config'
import { IControl } from '../index'

export default Vue.extend({
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
