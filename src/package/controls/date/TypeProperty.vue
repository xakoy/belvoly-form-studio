<template>
    <basic label="类型">
        <el-select v-model="options.prop.type" size="small">
            <el-option v-for="item in items" :key="item.value" :label="item.text" :value="item.value"></el-option>
        </el-select>
    </basic>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Config } from '../config'
import { IControl } from '../index'
import Basic from '../props/Basic.vue'

const ITEMS = [
    { text: '日期', value: 'date' },
    { text: '年', value: 'year' },
    { text: '月', value: 'month' },
    { text: '日期时间', value: 'datetime' },
    { text: '时间', value: 'time' }
]

@Component({
    components: {
        Basic
    }
})
export default class Type extends Vue {
    @Prop() config
    @Prop() control

    items = ITEMS

    get editControl(): IControl {
        return this.control as IControl
    }
    get options(): Config {
        return this.editControl.config
    }
}
</script>
