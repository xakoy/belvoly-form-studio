<template>
    <el-form-item v-if="rules" :rules="rules" :prop="property.propName">
        <component :control="control" :property="property" :is="property.editor" :extra="extraInject" />
    </el-form-item>
    <component v-else :control="control" :property="property" :is="property.editor" :extra="extraInject" />
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator'
import { IControl, IProperty } from '../interface'
import { SYMBOL_EXTRA_KEY } from '../symbol'

@Component
export default class Index extends Vue {
    @Prop() control: IControl
    @Prop() property: IProperty
    @Inject({ from: SYMBOL_EXTRA_KEY, default: {} }) extraInject: any

    get rules() {
        return this.property.rules
    }
}
</script>
