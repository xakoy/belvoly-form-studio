<template>
    <prop>
        <label-prop :control="control"></label-prop>
        <font-size :control="control"></font-size>
        <text-align :control="control"></text-align>
        <color :control="control"></color>
        <padding :control="control"></padding>
    </prop>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Label as LabelProp, FontSize, TextAlign, Padding, Color } from '../props'

export default Vue.extend({
    props: ['control'],
    components: {
        Prop,
        Color,
        LabelProp,
        FontSize,
        TextAlign,
        Padding
    }
})
</script>
