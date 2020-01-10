<template>
    <div class="property-editor-item">
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

<style lang="less">
.property-editor-item{
    > h5 {
        font-size: 14px;
        line-height: 48px;
    }
    font-size: 12px;
    padding-bottom: 10px;
}
</style>
