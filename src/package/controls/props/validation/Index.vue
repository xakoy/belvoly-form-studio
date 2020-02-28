<template>
    <basic label="验证">
        <slot />
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from '../../config'
import { IControl } from '../../index'
import Basic from '../Basic.vue'

export default Vue.extend({
    components: {
        Basic
    },
    props: ['config', 'control'],
    data() {
        return {
            label: ''
        }
    },
    computed: {
        editControl(): IControl {
            return this.control as IControl
        },
        options(): Config {
            return this.editControl.config
        }
    }
})
</script>
