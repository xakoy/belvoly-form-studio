<template>
    <div>
        <label-prop :control="control"></label-prop>
        <options :control="control"></options>
        <options-align :control="control"></options-align>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Label as LabelProp, Options, OptionsAlign } from '../props'

export default Vue.extend({
    props: ['control'],
    components: {
        Options,
        OptionsAlign,
        LabelProp
    }
})
</script>
