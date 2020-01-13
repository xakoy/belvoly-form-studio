<template>
    <div class="bfs-control bfs-control-title" :style="style">
        {{ prop.label }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from '../config'

export default Vue.extend({
    props: ['config'],
    computed: {
        options (): Config {
            return this.config as Config
        },
        prop (): any {
            return this.options.prop
        },
        style () : any {
            return {
                fontSize: this.prop.fontsize + 'px',
                textAlign: this.prop.textAlign,
                paddingTop: this.prop.padding.top + 'px',
                paddingBottom: this.prop.padding.bottom + 'px',
                paddingLeft: this.prop.padding.left + 'px',
                paddingRight: this.prop.padding.right + 'px',
                color: this.prop.color
            }
        }
    }
})
</script>

<style lang="less">
.bfs-control-title {
    line-height: 1.5;
}
</style>
