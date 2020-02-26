<template>
    <basic label="格式">
        <el-input v-model="options.prop.format" size="small"></el-input>
    </basic>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Config } from '../config'
import { IControl } from '../index'
import Basic from '../props/Basic.vue'

@Component({
    components: {
        Basic
    }
})
export default class FormatProperty extends Vue {
    @Prop() config
    @Prop() control

    get editControl(): IControl {
        return this.control as IControl
    }
    get options(): Config {
        return this.editControl.config
    }
}
</script>
