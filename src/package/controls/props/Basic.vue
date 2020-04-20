<template>
    <div class="bfs-property-editor-item">
        <h5>{{ label }} <span v-if="isRequired" class="bfs-property-editor-item-required">*</span></h5>
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
        },
        property: {
            type: Object,
            required: false
        }
    },
    computed: {
        isRequired() {
            if (!this.property) {
                return false
            }
            let rules = this.property.rules
            if (!rules) {
                return false
            }

            if (!Array.isArray(rules)) {
                rules = [rules]
            }

            return rules.some(item => item.required)
        }
    }
})
</script>

<style lang="less">
.bfs-property-editor-item {
    > h5 {
        font-size: 14px;
        line-height: 48px;
    }
    font-size: 12px;
    padding-bottom: 10px;

    &-required {
        color: #f00;
    }
}
</style>
