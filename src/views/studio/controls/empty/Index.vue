<template>
    <div>empty {{ control.id }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IControl } from '../../../../package/form-studio/interface'

@Component
export default class Index extends Vue {
    @Prop() control: IControl
}
</script>
