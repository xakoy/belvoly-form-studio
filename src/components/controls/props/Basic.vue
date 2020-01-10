<template>
    <div>
        <h5>{{label}}</h5>
        <div>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        label: {
            type: String,
            required: true
        }
    }
})
</script>
