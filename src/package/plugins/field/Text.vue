<template>
    <basic label="字段文本">
        <el-input size="small" v-model="options.prop.fieldText"></el-input>
    </basic>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Basic } from '../../controls/props'
import { IControl, IConfig } from '../../interface'

@Component({
    components: {
        Basic
    }
})
export default class Index extends Vue {
    @Prop() control

    get editControl(): IControl {
        return this.control as IControl
    }
    get options(): IConfig {
        return this.editControl.config
    }
}
</script>
