<template>
    <div>
        <label-prop :control="control"></label-prop>
        <font-size :control="control"></font-size>
        <text-align :control="control"></text-align>
        <color :control="control"></color>
        <padding :control="control"></padding>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Label as LabelProp, FontSize, TextAlign, Padding, Color } from '../props'

export default Vue.extend({
    props: ['control'],
    components: {
        Color,
        LabelProp,
        FontSize,
        TextAlign,
        Padding
    }
})
</script>
