<template>
    <el-form-item v-if="control.config.isData" ref="formItem" :rules="rules" :prop="fieldName" v-bind="itemGetBinder(control)">
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
            :extra="extraInject"
            :context="getContext(control)"
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
        :extra="extraInject"
        :context="getContext(control)"
        v-bind="itemGetBinder(control)"
    ></component>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator'
import { IControl, IControlContext } from '../interface'
import { SYMBOL_EXTRA_KEY } from '../symbol'
import { SYM_VIEW_PROP_KEY, ViewPubPropModel } from './view-prop'

@Component
export default class FormItem extends Vue {
    @Prop() itemValueField!: string
    @Prop() control: IControl
    @Prop() value: any
    @Prop() fieldName!: string
    @Prop() formModel!: any
    @Prop({ default: false }) readonly readonly!: boolean
    @Inject({ from: SYMBOL_EXTRA_KEY, default: {} }) extraInject: any
    @Inject({ from: SYM_VIEW_PROP_KEY, default: {} }) viewPubProp: ViewPubPropModel

    rules = []

    mounted() {
        const $control = this.$refs.control as any
        const {
            rules,
            config: { rule: configRule }
        } = this.control
        if (rules) {
            this.rules = rules
                .map(rule =>
                    rule.getRule(configRule[rule.ruleName], this.control, $control, {
                        viewer: this.viewPubProp.viewer
                    })
                )
                .filter(rule => rule)
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

    itemGetBinder(item: IControl) {
        let op: any = {}
        if (this.viewPubProp.itemBindOptions) {
            op = this.viewPubProp.itemBindOptions(item) || {}
        }
        const cl = { 'bfs-item': true, 'bfs-from-item': true }
        op.class = {
            ...op.class,
            ...cl
        }
        return op
    }

    getContext(item: IControl): IControlContext {
        return {
            isInDesignMode: false
        }
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
