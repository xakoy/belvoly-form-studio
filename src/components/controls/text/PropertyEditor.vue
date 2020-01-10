<template>
    <div>
        <label-prop :control="control"></label-prop>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Label as LabelProp } from '../props'

export default Vue.extend({
    props: ['control'],
    components: {
        LabelProp
    }
})
</script>
