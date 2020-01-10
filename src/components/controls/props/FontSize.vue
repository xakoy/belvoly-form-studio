<template>
    <div>
        <h5>字号</h5>
        <div>
            <select v-model="options.prop.fontsize">
                <option v-for="size in sizes" :key="size">{{size}}</option>
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
            sizes: [14, 18, 25, 32, 58],
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
    }
})
</script>
