<template>
    <div>
        <label-prop :control="control"></label-prop>
        <options :control="control"></options>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Label as LabelProp, Options } from '../props'

export default Vue.extend({
    props: ['control'],
    components: {
        Options,
        LabelProp
    }
})
</script>
