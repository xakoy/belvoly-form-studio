<template>
    <div>
        <color :control="control"></color>
        <padding :control="control"></padding>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Padding, Color } from '../props'

export default Vue.extend({
    props: ['control'],
    components: {
        Color,
        Padding
    }
})
</script>
