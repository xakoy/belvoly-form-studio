<template>
    <div>
        是否必填 <el-switch v-model="rule.required"></el-switch>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IControl, Config } from '../../config'

export default Vue.extend({
    props: ['control'],
    data () {
        return {
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
