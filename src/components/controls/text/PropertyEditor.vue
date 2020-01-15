<template>
    <prop>
        <label-prop :control="control"></label-prop>
        <default-value :control="control"></default-value>
        <max-length :control="control"></max-length>
        <validation>
            <validation-required :control="control"></validation-required>
            <validation-text-type :control="control"></validation-text-type>
            <validataion-text-regxp :control="control"></validataion-text-regxp>
        </validation>
    </prop>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Label as LabelProp, MaxLength, Validation, ValidationRequired, ValidationTextType, ValidataionTextRegxp } from '../props'
import DefaultValue from './DefaultValuePropertyEditor.vue'

export default Vue.extend({
    props: ['control'],
    components: {
        Prop,
        LabelProp,
        DefaultValue,
        MaxLength,
        Validation,
        ValidationRequired,
        ValidationTextType,
        ValidataionTextRegxp
    }
})
</script>
