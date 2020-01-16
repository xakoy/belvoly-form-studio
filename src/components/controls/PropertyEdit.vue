<template>
    <div>
        属性编辑器
        <template v-if="propertys">
            <component v-for="prop in propertys" :key="prop.propName" :control="control" :is="prop.editor"></component>
        </template>
        <template v-if="rules">
            <validation>
                <component v-for="rule in rules" :key="rule.ruleName" :control="control" :is="rule.editor"></component>
            </validation>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Validation } from './props/validation'
import { Config } from './config'
import { IControl } from '../interface'

export default Vue.extend({
    props: ['config', 'control'],
    components: {
        Validation
    },
    computed: {
        editControl (): IControl {
            return this.control as IControl
        },
        options (): Config {
            return this.editControl.config
        },
        propertys () {
            return this.editControl.propertys
        },
        rules () {
            return this.editControl.rules
        }
    }
})
</script>
