<template>
    <div class="webpart-item-place" @click.stop="clickHandler">
        +
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
    clickHandler() {
        console.log(`log`)
    }
}
</script>

<style lang="less">
.webpart-item-place {
    border: 1px dashed #ccc;
    margin-bottom: 20px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 120px;
}
</style>
