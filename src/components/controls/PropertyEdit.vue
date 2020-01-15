<template>
    <div>
        属性编辑器
        <template v-if="propertys">
            <component v-for="prop in propertys" :key="prop.propName" :control="control" :is="prop.editor"></component>
        </template>
        <template v-else>
            <component v-if="editControl.propertyEditor" :control="control" :is="editControl.propertyEditor"></component>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from './config'
import { IControl } from '../interface'

export default Vue.extend({
    props: ['config', 'control'],
    computed: {
        editControl (): IControl {
            return this.control as IControl
        },
        options (): Config {
            return this.editControl.config
        },
        propertys () {
            return this.editControl.propertys
        }
    }
})
</script>
