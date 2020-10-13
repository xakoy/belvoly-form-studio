<template>
    <basic label="间隔" :property="property">
        <p>栅格之间的间距，单位px</p>
        <el-input-number step-strictly :step="1" :min="0" v-model="prop.gutter"> </el-input-number>px
    </basic>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Basic from '../props/Basic.vue'
import { IControl, IProperty } from '../../interface'

@Component({
    components: {
        Basic
    }
})
export default class Index extends Vue {
    @Prop() control: IControl
    @Prop() property: IProperty

    get prop() {
        return this.control.config.prop
    }
}
</script>
