<template>
    <component
        v-if="control.config.isLayout"
        ref="control"
        :value="value"
        @input="inputChangeHandler($event)"
        :is="control.component"
        :itemValueField="itemValueField"
        :control="control"
        :config="control.config"
        :formModel="formModel"></component>
    <el-form-item
        v-else ref="formItem"
        :rules="rules"
        :prop="fieldName"
        class="bfs-from-item"
    >
        <component
            ref="control"
            :value="value"
            @input="inputChangeHandler($event)"
            :is="control.component"
            :itemValueField="itemValueField"
            :control="control"
            :config="control.config"
            :formModel="formModel"
        ></component>
    </el-form-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IControl } from './controls'

@Component
export default class FormItem extends Vue {
    @Prop() itemValueField!: string
    @Prop() control: IControl
    @Prop() value: any
    @Prop() fieldName!: string
    @Prop() formModel!: any

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
        if ($formItem && $formItem.onFieldChange) {
            this.$nextTick(() => {
                $formItem.onFieldChange()
            })
        }
        this.$emit('input', e)
    }
}
</script>

<style lang="less">
.bfs-from-item {
    padding-bottom: 5px !important;
    margin-bottom: 0;
    // &:hover {
    //     background: #f1f2f3;
    // }

    .el-form-item__error {
        margin-top: -15px;
        margin-left: 15px;
    }
}
</style>
