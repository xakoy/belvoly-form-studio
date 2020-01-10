<template>
    <div>
        <h5>标签</h5>
        <div>
            <input type="text" v-model="options.prop.label" />
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
