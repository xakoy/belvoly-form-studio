<template>
    <div :style="style" class="fmc-control-divider">
        <div :style="itemStyle"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Config } from '../config'

@Component
export default class Divider extends Vue {
    @Prop() config

    get options (): Config {
        return this.config as Config
    }
    get prop (): any {
        return this.options.prop
    }
    get style () : any {
        return {
            paddingTop: this.prop.padding.top + 'px',
            paddingBottom: this.prop.padding.bottom + 'px',
            color: this.prop.color
        }
    }
    get itemStyle () {
        return {
            backgroundColor: this.prop.color
        }
    }
}
</script>

<style lang="less">
.fmc-control-divider{
    > div {
        height: 1px;
        background: #000;
    }
}
</style>
