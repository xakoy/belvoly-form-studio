<template>
    <div class="bfs-viewer-zone">
        <div v-if="!controls || controls.length === 0" class="bfs-viewer-empty-placeholder"></div>
        <template v-else>
            <form-item
                :readonly="readonly"
                :itemValueField="itemValueField"
                :formModel="formModel"
                v-model="formModel[getFieldName(control)]"
                :fieldName="getFieldName(control)"
                v-for="control in controls"
                :key="control.id"
                :control="control"
            ></form-item>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IControl } from '../interface'
import FormItem from './FormItem.vue'
import { getFieldName as getFieldNameFun } from './viewerUtil'

@Component({
    name: 'BfsViewerZone',
    components: {
        FormItem
    }
})
export default class FormViewerZone extends Vue {
    @Prop() itemValueField!: string
    @Prop() controls!: IControl[]
    @Prop() readonly formModel!: any
    @Prop({ default: false }) readonly readonly!: boolean

    getFieldName(control: IControl) {
        return getFieldNameFun(control, this.itemValueField)
    }
}
</script>

<style lang="less">
.bfs-viewer-empty-placeholder {
    height: 1px;
}
</style>
