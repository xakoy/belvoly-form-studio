<template>
    <prop>
        <color :control="control"></color>
        <padding :control="control"></padding>
    </prop>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Padding, Color } from '../props'

export default Vue.extend({
    props: ['control'],
    components: {
        Prop,
        Color,
        Padding
    }
})
</script>
