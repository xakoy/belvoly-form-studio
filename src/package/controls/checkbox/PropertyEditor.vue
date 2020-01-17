<template>
    <prop>
        <label-prop :control="control"></label-prop>
        <options :control="control"></options>
        <options-align :control="control"></options-align>
    </prop>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Label as LabelProp, Options, OptionsAlign } from '../props'

export default Vue.extend({
    props: ['control'],
    components: {
        Prop,
        Options,
        OptionsAlign,
        LabelProp
    }
})
</script>
