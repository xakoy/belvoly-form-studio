<template>
    <el-form-item ref="formItem" :rules="rules" :prop="control.id" class="fs-from-item">
        <component ref="control" :value="value" @input="inputChangeHandler($event)" :is="control.component" :config="control.config"></component>
    </el-form-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IControl } from './controls'

@Component
export default class FormItem extends Vue {
    @Prop() control: IControl
    @Prop() value: any

    rules = []

    mounted () {
        const $control = this.$refs.control as any
        const getRulesDelegate = $control.getRules
        if (getRulesDelegate) {
            this.rules = [...getRulesDelegate()]
        }
    }

    inputChangeHandler (e) {
        const $formItem = this.$refs.formItem as any
        this.$nextTick(() => {
            $formItem.onFieldChange()
        })
        this.$emit('input', e)
    }
}
</script>

<style lang="less">
.fs-from-item {
    padding-bottom: 5px !important;
    margin-bottom: 0;
    &:hover {
        background: #f1f2f3;
    }

    .el-form-item__error {
        margin-top: -15px;
        margin-left: 15px;
    }
}
</style>
