<template>
    <basic :config="config">
        <el-input :value="value" @input="$emit('input', $event)" placeholder="请填写文本内容" :maxlength="options.prop.maxLength" />
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import Basic from '../Basic.vue'
import { Config } from '../config'

export default Vue.extend({
    props: ['config', 'value'],
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
        rule () {
            return this.options.prop.rule
        }
    },
    methods: {
        getRules () {
            const rules = []
            const { required, type, regexp } = this.rule
            if (required) rules.push({ required: true, message: '请填写内容，不能为空' })
            if (type) {
                switch (type) {
                case 'email':
                    rules.push({ type: 'email', message: '输入email格式，示例：xxxx@domain.com' })
                    break
                case 'url':
                    rules.push({ type: 'url', message: '输入url格式，示例：http://www.domain.com' })
                    break
                }
            }
            if (regexp) {
                rules.push({ pattern: new RegExp(regexp), message: '格式不正确' })
            }
            return rules
        }
    }
})
</script>
