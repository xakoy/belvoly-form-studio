<template>
    <div class="bfs-control" :class="{ 'bfs-control-designmode': isInDesignMode }">
        <dl :position="labelPosition">
            <dt :style="labelStyle">{{ label }}{{ labelSuffix }}<em v-if="isShowRequiredAsterisk && isRequired && !readonly" class="bfs-control-label-required">*</em></dt>
            <dd>
                <slot />
            </dd>
        </dl>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from './config'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_DESIGN, SYMBOL_FORM_PROPERTY_KEY } from '../symbol'
import { FormPropertyModel } from '../interface'

export default Vue.extend({
    inject: {
        formProperty: {
            from: SYMBOL_FORM_PROPERTY_KEY,
            default: {}
        }
    },
    props: {
        config: {},
        readonly: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        options(): Config {
            return this.config as Config
        },
        label(): string {
            return this.options.prop.label || this.options.text
        },
        isInDesignMode() {
            return this.mode === SYMBOL_MODE_DESIGN
        },
        isRequired() {
            const { rule } = this.options
            return rule && rule.required
        },
        isShowRequiredAsterisk() {
            const { showRequiredAsterisk } = this.formProperty
            return showRequiredAsterisk !== false
        },
        labelPosition() {
            return this.formProperty.labelPosition
        },
        labelStyle() {
            const style: any = {}
            if (this.labelPosition === 'left' || this.labelPosition === 'right') {
                style.width = this.formProperty.labelWidth + 'px'
            }
            return style
        },
        labelSuffix() {
            return this.formProperty.labelSuffix
        }
    }
})
</script>

<style lang="less">
.bfs-control {
    padding: 0 15px 12px 12px;

    &-designmode &:hover {
        background: #f1f2f3;
    }

    .active {
        background: #e3f3ff;
    }

    dt {
        height: 32px;
        line-height: 32px;
        color: #757575 !important;
        font-size: 13px;
    }

    &-label-required {
        color: red;
        font-style: normal;
        padding-left: 5px;
    }

    // begin label position css
    dl[position='left'],
    dl[position='right'] {
        display: flex;
        dt {
            width: 80px;
        }
        dd {
            flex: 1;
        }
    }

    dl[position='top'] {
    }

    dl[position='right'] {
        dt {
            text-align: right;
            padding-right: 5px;
        }
    }

    // end label position css
}
</style>
