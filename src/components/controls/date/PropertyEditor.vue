<template>
    <prop>
        <label-prop :control="control"></label-prop>
        <type-prop :control="control"></type-prop>
        <format-prop :control="control"></format-prop>
        <validation>
            <validation-required :control="control"></validation-required>
        </validation>
    </prop>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Label as LabelProp, Validation, ValidationRequired } from '../props'
import TypeProp from './TypeProperty.vue'
import FormatProp from './FormatProperty.vue'

export default Vue.extend({
    props: ['control'],
    components: {
        Prop,
        LabelProp,
        TypeProp,
        FormatProp,
        Validation,
        ValidationRequired
    }
})
</script>
