<template>
    <div>
        <label-prop :control="control"></label-prop>
        <default-value :control="control"></default-value>
        <max-length :control="control"></max-length>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Label as LabelProp, MaxLength } from '../props'
import DefaultValue from './DefaultValuePropertyEditor.vue'

export default Vue.extend({
    props: ['control'],
    components: {
        LabelProp,
        DefaultValue,
        MaxLength
    }
})
</script>
