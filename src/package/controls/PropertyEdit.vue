<template>
    <div>
        <el-form ref="form" :model="control.config.prop">
            <div style="font-size: 14px;">当前控件：{{ control.config.text }}</div>
            <template v-if="propertys">
                <property-edit-item v-for="prop in propertys" :key="prop.propName" :property="prop" :control="control" />
            </template>
            <template v-if="rules && rules.length > 0">
                <validation>
                    <component v-for="rule in rules" :key="rule.ruleName" :control="control" :is="rule.editor" :extra="extraInject"></component>
                </validation>
            </template>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator'
import { Validation } from './props/validation'
import { IControl, IConfig } from '../interface'
import PropertyEditItem from './PropertyEditItem.vue'
import { ElForm } from 'element-ui/types/form'
import { SYMBOL_EXTRA_KEY } from '../symbol'

@Component({
    components: {
        PropertyEditItem,
        Validation
    }
})
export default class PropertyEdit extends Vue {
    @Prop() control: IControl
    @Prop() config: any
    @Inject({ from: SYMBOL_EXTRA_KEY, default: {} }) extraInject: any

    get editControl(): IControl {
        return this.control as IControl
    }
    get options(): IConfig {
        return this.editControl.config
    }
    get propertys() {
        return this.editControl.propertys
    }
    get rules() {
        return (this.editControl.rules || []).filter(item => item.editor)
    }

    async validate() {
        try {
            const isValid = await (this.$refs.form as ElForm).validate()
            return isValid
        } catch (ex) {
            return false
        }
    }
}
</script>
