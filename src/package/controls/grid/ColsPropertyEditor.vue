<template>
    <basic label="列" class="bfs-property-editor-cols">
        <p>
            请注意，一行的列宽总和为24，大于24会自动添加一行。
        </p>
        <div class="bfs-property-editor-cols-title">
            <em>排序</em>
            <span>列宽</span>
            <em>删除</em>
        </div>
        <draggable :list="items" v-bind="{ animation: 200 }" handle=".bfs-property-editor-cols-item-drag-handler" @start="drag = true" @end="drag = false">
            <transition-group tag="ul" type="transition" :name="!drag ? 'flip-list' : null">
                <li v-for="item in items" :key="'li' + item.id">
                    <el-tooltip content="排序" placement="right">
                        <i class="el-icon-menu bfs-property-editor-cols-item-drag-handler"></i>
                    </el-tooltip>
                    <el-input-number :min="1" :max="24" size="small" v-model="item.span" placeholder="列宽" />
                    <el-tooltip content="删除此选项" placement="left">
                        <i class="el-icon-close" @click="removeItemHandler(item)"></i>
                    </el-tooltip>
                </li>
            </transition-group>
        </draggable>
        <div>
            <el-link @click="addClickHandler" :underline="false" type="primary"><i class="el-icon-plus"></i> 添加列</el-link>
        </div>
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import { IConfig, IControl } from '../../interface'
import Basic from '../props/Basic.vue'
import Draggable from 'vuedraggable'

function generateID() {
    return new Date().getTime() + Math.ceil(Math.random() * 10000)
}

export default Vue.extend({
    components: {
        Basic,
        Draggable
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
        options(): IConfig {
            return this.editControl.config
        },
        items() {
            return this.options.prop.cols
        }
    },
    methods: {
        addClickHandler() {
            this.items.push({ span: 10, id: generateID() })
            this.index = this.index + 1
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
.bfs-property-editor-cols {
    &-title {
        border-bottom: 1px solid #ccc;
        margin-bottom: 5px;
        display: flex;
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
        // display: none;
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
        > i {
            font-size: 16px;
            padding: 7px 5px 0 5px;
            width: 24px;
            cursor: pointer;
            &:hover {
                color: #409eff;
            }
        }
        padding: 5px 0;

        .el-input-number {
            flex-grow: 1;
            flex-shrink: 1;
        }
    }
}
</style>
