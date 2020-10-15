<template>
    <basic label="选项" class="bfs-property-editor-options">
        <div class="bfs-property-editor-options-title">
            <em>排序</em>
            <span>选项文本</span>
            <span>选项值</span>
            <em>删除</em>
        </div>
        <draggable :list="items" v-bind="{ animation: 200 }" handle=".bfs-property-editor-options-item-drag-handler" @start="drag = true" @end="drag = false">
            <transition-group tag="ul" type="transition" :name="!drag ? 'flip-list' : null">
                <li v-for="item in items" :key="'li' + item.id">
                    <el-tooltip content="排序" placement="right"> </el-tooltip>
                    <i class="el-icon-menu bfs-property-editor-options-item-drag-handler"></i>
                    <el-input size="small" v-model="item.text" placeholder="选项文本" />
                    <el-input size="small" v-model="item.value" placeholder="选项值" />
                    <el-tooltip content="删除此选项" placement="left">
                        <i class="el-icon-close" @click="removeItemHandler(item)"></i>
                    </el-tooltip>
                </li>
            </transition-group>
        </draggable>
        <div>
            <el-link @click="addClickHandler" :underline="false" type="primary"><i class="el-icon-plus"></i> 添加选项</el-link>
        </div>
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from '../config'
import { IControl } from '../index'
import Basic from './Basic.vue'
import Draggable from 'vuedraggable'
import { Tooltip } from 'element-ui'

function generateID() {
    return new Date().getTime() + Math.ceil(Math.random() * 10000)
}

export default Vue.extend({
    components: {
        Basic,
        Draggable,
        ElTooltip: Tooltip
    },
    props: ['config', 'control'],
    data() {
        return {
            index: 4,
            drag: false
        }
    },
    mounted() {
        this.index = this.items.length + 1
    },
    computed: {
        editControl(): IControl {
            return this.control as IControl
        },
        options(): Config {
            return this.editControl.config
        },
        items() {
            return this.options.prop.options
        }
    },
    methods: {
        addClickHandler() {
            const text = '选项' + this.index
            this.items.push({ text: text, value: text, id: generateID() })
            this.index = this.index + 1
        },
        textChangeHandler(item, value) {
            item.text = value
            item.value = value
        },
        removeItemHandler(item) {
            const index = this.items.indexOf(item)
            if (index > -1) {
                this.items.splice(index, 1)
            }
        }
    }
})
</script>

<style lang="less">
.bfs-property-editor-options {
    &-title {
        border-bottom: 1px solid #ccc;
        margin-bottom: 5px;
        display: flex;
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
        display: none;
        em {
            flex-grow: 0;
            width: 30px;
            font-style: normal;
        }
        span {
            flex-grow: 1;
            flex-shrink: 1;
        }
    }

    &-item {
        &-drag-handler {
            cursor: move !important;
        }
    }
    li {
        display: flex;
        line-height: 32px;
        i {
            font-size: 16px;
            padding: 7px 5px 0 5px;
            width: 24px;
            cursor: pointer;
            &:hover {
                color: #409eff;
            }
        }
        padding: 5px 0;
        .el-input {
            margin-left: 5px;
        }
    }
}
</style>
