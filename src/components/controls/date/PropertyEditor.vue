<template>
    <div>
        <label-prop :control="control"></label-prop>
        <default-value :control="control"></default-value>
        <validation>
            <validation-required :control="control"></validation-required>
        </validation>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Label as LabelProp, Validation, ValidationRequired } from '../props'
import DefaultValue from './DefaultValuePropertyEditor.vue'

export default Vue.extend({
    props: ['control'],
    components: {
        LabelProp,
        DefaultValue,
        Validation,
        ValidationRequired
    }
})
</script>
