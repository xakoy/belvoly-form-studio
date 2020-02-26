<template>
    <div>
        <design-zone />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DesignZone from '@/package/form-studio/components/DesignZone.vue'
import Component from 'vue-class-component'
@Component({
    components: {
        DesignZone
    }
})
export default class Design extends Vue {}
</script>
