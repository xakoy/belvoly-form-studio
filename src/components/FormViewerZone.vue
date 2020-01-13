<template>
    <div>
        <form-item :itemValueField="itemValueField" :formModel="formModel" v-model="formModel[getFieldName(control)]" :fieldName="getFieldName(control)" v-for="control in controls" :key="control.id" :control="control"></form-item>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IControl } from './controls/config'
import FormItem from './FormItem.vue'

@Component({
    components: {
        FormItem
    }
})
export default class FormViewerZone extends Vue {
    @Prop() itemValueField!: string
    @Prop() controls!: IControl[]
    @Prop() readonly formModel!: any

    getFieldName (control: IControl) {
        if (this.itemValueField === 'id') {
            return control.id
        }
        return control.config.prop[this.itemValueField]
    }
}
</script>
