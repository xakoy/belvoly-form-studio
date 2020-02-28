<template>
    <el-form-item v-if="control.config.isData" ref="formItem" :rules="rules" :prop="fieldName" class="bfs-from-item">
        <component
            ref="control"
            :readonly="readonly"
            :value="value"
            @input="inputChangeHandler($event)"
            :is="control.component"
            :itemValueField="itemValueField"
            :control="control"
            :config="control.config"
            :formModel="formModel"
        ></component>
    </el-form-item>
    <component
        v-else
        ref="control"
        :value="value"
        @input="inputChangeHandler($event)"
        :is="control.component"
        :itemValueField="itemValueField"
        :readonly="readonly"
        :control="control"
        :config="control.config"
        :formModel="formModel"
    ></component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IControl } from '../interface'

@Component
export default class FormItem extends Vue {
    @Prop() itemValueField!: string
    @Prop() control: IControl
    @Prop() value: any
    @Prop() fieldName!: string
    @Prop() formModel!: any
    @Prop({ default: false }) readonly readonly!: boolean

    rules = []

    mounted() {
        const $control = this.$refs.control as any
        const {
            rules,
            config: { rule: configRule }
        } = this.control
        if (rules) {
            this.rules = rules.map(rule => rule.getRule(configRule[rule.ruleName], this.control, $control)).filter(rule => rule)
        }
    }

    inputChangeHandler(e) {
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
