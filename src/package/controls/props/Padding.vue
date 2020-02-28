<template>
    <basic label="距离">
        <div class="box">
            <dl>
                <dt>顶</dt>
                <dd><el-input-number v-model="padding.top" :min="1" size="small" controls-position="right"></el-input-number> px</dd>
            </dl>
            <dl>
                <dt>底</dt>
                <dd><el-input-number v-model="padding.bottom" :min="1" size="small" controls-position="right"></el-input-number> px</dd>
            </dl>
        </div>
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import Basic from './Basic.vue'
import { Config } from '../config'
import { IControl } from '../index'

export default Vue.extend({
    props: ['config', 'control'],
    components: {
        Basic
    },
    data() {
        return {
            items: [
                { text: '左对齐', value: 'left' },
                { text: '居中对齐', value: 'center' },
                { text: '右对齐', value: 'right' }
            ]
        }
    },
    computed: {
        editControl(): IControl {
            return this.control as IControl
        },
        options(): Config {
            return this.editControl.config
        },
        padding(): any {
            return this.options.prop.padding
        }
    }
})
</script>

<style lang="less" scoped>
.box {
    dl {
        display: flex;
        padding: 5px 0;
        dt {
            width: 30px;
        }
        dd {
            flex: 1;

            input {
                width: 60px;
            }
        }
    }
}
</style>
