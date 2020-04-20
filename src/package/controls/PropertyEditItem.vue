<template>
    <el-form-item v-if="rules" :rules="rules" :prop="property.propName">
        <component :control="control" :is="property.editor" />
    </el-form-item>
    <component v-else :control="control" :is="property.editor" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IControl, IProperty } from '../interface'

@Component
export default class Index extends Vue {
    @Prop() control: IControl
    @Prop() property: IProperty

    get rules() {
        return this.property.rules
    }
}
</script>
