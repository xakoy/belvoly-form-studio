<template>
    <div>
        <preview />
    </div>
</template>

<script lang="ts">
import Preview from '../../Preview.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    components: {
        Preview
    }
})
export default class Index extends Vue {}
</script>
