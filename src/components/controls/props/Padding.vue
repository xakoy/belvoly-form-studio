<template>
    <basic label="距离">
        <div class="box">
            <dl>
                <dt>顶</dt>
                <dd><input type="text" v-model="padding.top" />px</dd>
            </dl>
            <dl>
                <dt>底</dt>
                <dd><input type="text" v-model="padding.bottom" />px</dd>
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
    data () {
        return {
            items: [
                { text: '左对齐', value: 'left' },
                { text: '居中对齐', value: 'center' },
                { text: '右对齐', value: 'right' }
            ]
        }
    },
    computed: {
        editControl (): IControl {
            return this.control as IControl
        },
        options (): Config {
            return this.editControl.config
        },
        padding (): any {
            return this.options.prop.padding
        }
    }
})
</script>

<style lang="less" scoped>
    .box {
        dl {
            display: flex;
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
