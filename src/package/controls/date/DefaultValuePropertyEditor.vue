<template>
    <basic label="默认值">
        <el-date-picker size="small" v-model="options.prop.defaultValue" placeholder="选择指定日期"></el-date-picker>
        <el-checkbox>当前值</el-checkbox>
    </basic>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Config } from '../config'
import { IControl } from '../index'
import Basic from '../props/Basic.vue'

const ITEMS = [
    { text: '当前日期', value: '$date', type: 'date' },
    { text: '指定日期', value: '$onedate', type: 'date' }
]

@Component({
    components: {
        Basic
    }
})
export default class DefaultValuePropertyEditor extends Vue {
    @Prop() config
    @Prop() control

    items = ITEMS.filter(item => item.type === 'date')

    get editControl(): IControl {
        return this.control as IControl
    }
    get options(): Config {
        return this.editControl.config
    }
}
</script>
