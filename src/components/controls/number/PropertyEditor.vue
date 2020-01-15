<template>
    <prop>
        <label-prop :control="control"></label-prop>
    </prop>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Label as LabelProp } from '../props'

export default Vue.extend({
    props: ['control'],
    components: {
        Prop,
        LabelProp
    }
})
</script>
