<template>
    <basic :config="config" :readonly="isReadonly">
        <span v-if="isReadonly">{{ text }}</span>
        <template v-else>
            <el-input-number :value="value" @input="$emit('input', $event)" :placeholder="placeholder" />
        </template>
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import Basic from '../Basic.vue'
import { Config } from '../config'

export default Vue.extend({
    props: {
        config: {},
        value: {},
        readonly: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Basic
    },
    computed: {
        options() {
            return this.config as Config
        },
        prop() {
            return this.options.prop
        },
        placeholder() {
            return this.prop.placeholder || '请填写数值'
        },
        isReadonly() {
            return this.readonly
        },
        text() {
            return this.value
        }
    }
})
</script>
