<template>
    <div class="bfs-control" :class="{'bfs-control-designmode': isInDesignMode}">
        <dl>
            <dt>{{ label }}</dt>
            <dd>
                <slot />
            </dd>
        </dl>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from './config'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_DESIGN } from '../symbol'

export default Vue.extend({
    inject: { SYMBOL_MODE_KEY },
    props: ['config'],
    computed: {
        options (): Config {
            return this.config as Config
        },
        label (): string {
            return this.options.prop.label || this.options.text
        },
        isInDesignMode () {
            return this.mode === SYMBOL_MODE_DESIGN
        }
    }
})
</script>

<style lang="less">
.bfs-control {
    padding: 0 15px 12px 12px;

    &-designmode &:hover{
        background: #f1f2f3;
    }

    .active{
        background: #e3f3ff;
    }

    dt {
        height: 32px;
        line-height: 32px;
        color: #757575 !important;
        font-size: 13px;
    }
}
</style>
