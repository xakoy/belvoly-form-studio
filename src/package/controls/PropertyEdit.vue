<template>
    <div>
        <el-form ref="form" :model="control.config.prop">
            <div style="font-size: 14px;">当前控件：{{ control.config.text }}</div>
            <template v-if="propertys">
                <property-edit-item v-for="prop in propertys" :key="prop.propName" :property="prop" :control="control" />
            </template>
            <template v-if="rules">
                <validation>
                    <component v-for="rule in rules" :key="rule.ruleName" :control="control" :is="rule.editor"></component>
                </validation>
            </template>
        </el-form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Validation } from './props/validation'
import { IControl, IConfig } from '../interface'
import PropertyEditItem from './PropertyEditItem.vue'

export default Vue.extend({
    props: ['config', 'control'],
    components: {
        PropertyEditItem,
        Validation
    },
    computed: {
        editControl(): IControl {
            return this.control as IControl
        },
        options(): IConfig {
            return this.editControl.config
        },
        propertys() {
            return this.editControl.propertys
        },
        rules() {
            return this.editControl.rules
        }
    },
    methods: {
        async validate() {
            try {
                const isValid = await this.$refs.form.validate()
                return isValid
            } catch (ex) {
                return false
            }
        }
    }
})
</script>
