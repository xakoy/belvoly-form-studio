<template>
    <basic :config="config" :readonly="isReadonly">
        <span v-if="isReadonly">{{ value }}</span>
        <template v-else>
            <el-input :value="value" @input="$emit('input', $event)" :placeholder="placeholder" :maxlength="options.prop.maxLength" />
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
    data () {
        return {
        }
    },
    computed: {
        options () {
            return this.config as Config
        },
        prop () {
            return this.options.prop
        },
        placeholder () {
            return this.prop.placeholder || '请填写内容'
        },
        isReadonly () {
            return this.readonly
        }
    },
    methods: {
    }
})
</script>
