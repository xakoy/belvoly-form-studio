<template>
    <div class="form-design-box">
        <div class="form-design-sider dragArea from-design-control-toolbars">
            <div class="from-design-control-toolbars-container">
                <h4>常用控件</h4>
                <draggable
                    class="drag-box"
                    v-model="list"
                    ghost-class="ghost"
                    :group="{ name: 'people', pull: 'clone', put: false }"
                    :clone="cloneDog"
                >
                    <div v-for="{config} in list" :key="config.name" class="b-view-control-static" data-b-view-control-type="Text">
                        <div class="b-view-control-label">
                            <i :class="'icon-' + config.icon"></i>
                            <span>{{config.text}}</span>
                        </div>
                    </div>
                </draggable>
            </div>
        </div>
        <div class="form-design-content">
            <div class="form-design-sortable-handle dropArea-tip" v-if="!list2.length">
                <p>点击或拖动左侧组件到改区域</p>
                <p>创建表单</p>
            </div>
            <draggable
                class="form-design-content-drag"
                v-model="list2"
                v-bind="dragOptions"
                group="people"
                @chang="log"
                @start="drag = true"
                @end="drag = false"
            >
                <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                    <div class="design-control-item" @click="controlClickHandler(item)" v-for="item in list2"  :key="item.id">
                        <component :is="item.component" :config="item.config"></component>
                        <div class="design-control-item-placeholder"></div>
                    </div>
                </transition-group>
            </draggable>
        </div>
        <div class="from-design-property-editor controlBox">
            <!-- <div class="tab tab-primary">
                <ul class="tab-nav">
                    <li class="current">
                        控件属性
                    </li>
                    <li>
                        流程属性
                    </li>
                </ul>
            </div> -->
            <div class="bpm-from-design-property-editor-container">
                <div class="edit-control">
                    <property-edit v-if="currentEditControl" :control="currentEditControl" :key="currentEditControl.id"></property-edit>
                </div>
                <div class="control-form-box hide">
                    <!-- <div class="controlForm flow-control-editable">
                        <div class="tip">设置可编辑节点 :</div>
                        <div class="flow-box-apply">
                            <label class="control-checkbox">
                                <input type="checkbox" name="name" value="申请" />
                                <i class="control-placeholder"></i>
                                申请
                            </label>
                        </div>
                    </div> -->

                    <!-- <div class="controlForm flow-control-visible">
                        <div class="tip">设置不可见节点 :</div>
                        <div class="flow-box-apply">
                            <label class="control-checkbox">
                                <input type="checkbox" name="name" value="申请" />
                                <i class="control-placeholder"></i>
                                申请
                            </label>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import draggable from 'vuedraggable'
import controls, { IControl } from '../components/controls/index'
import PropertyEdit from '../components/controls/PropertyEdit.vue'
import { DesignModel, DesignControlModel } from '../components/model'

let index = 1

export default Vue.extend({
    components: {
        draggable,
        PropertyEdit
    },
    data () {
        return {
            list: controls,
            list2: [],
            drag: false,
            currentEditControl: null as any
        }
    },
    computed: {
        dragOptions () {
            return {
                animation: 200,
                group: 'description',
                disabled: false,
                ghostClass: 'ghost6'
            }
        }
    },
    methods: {
        log (e: any) {
            console.log(e)
        },
        cloneDog (e: any) {
            const clone = {
                ...e,
                id: index++
            }
            clone.config = JSON.parse(JSON.stringify(clone.config))
            return clone
        },
        controlClickHandler (control: IControl) {
            this.currentEditControl = control
        },
        getModel () {
            const model: DesignModel = {
                controls: this.list2.map(c => {
                    return {
                        name: c.config.name,
                        prop: c.config.prop
                    }
                })
            }

            return model
        }
    }
})
</script>

<style lang="less">
.form-design {
    height: 100%;
    // overflow: hidden;
    > h3 {
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        padding: 0px 24px;
        font-weight: normal;
        font-size: 16px;
        text-align: left;
        position: absolute;
        width: 100%;
    }

    &-box{
        box-sizing: border-box;
        padding-top: 50px;
        height: 100%;
        display: flex;
        flex: 1;
    }

    &-sider{
        background: #f1f2f3;
        width: 300px;
        font-size: 12px;
    }
}

.from-design-control-toolbars{
    padding: 26px 20px;
    h4 {
        font-size: 13px;
        line-height: 1;
    }
}
.drag-box{
    margin: 12px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.b-view-control-static{
    width: 124px;
    box-sizing: border-box;
    line-height: 36px;
    margin-bottom: 12px;
    padding-left: 12px;
    list-style: none;
    position: relative;
    background-color: #fff;
    border: 1px solid transparent;
    box-shadow: 0 0 4px rgba(0,0,0,.16);
    border-radius: 4px;
    font-size: 13px;
    cursor: grab;
    &:hover,
    &.active{
        border-color: #2196f3;
        color: #2196f3;
    }

    i {
        display: inline-block;
        width: 25px;
        font-size: 16px;
    }
}
.from-design-property-editor{
    width: 350px;
    background-color: #fcfdfe;
    padding: 24px 20px;
}
.form-design-content{
    height: 100%;
    flex: 1;
    border-right: 1px solid rgb(234, 234, 234);
    position: relative;
    &-drag {
        height: 100%;
        > span {
            height: 100%;
            padding: 20px 10px;
            overflow: auto;
            display: block;
        }
    }
}
.dropArea-tip{
    position: absolute;
    border: 1px dashed #ccc;
    border-radius: 5px;
    width: 70%;
    margin: auto;
    left: 0;
    right: 0;
    padding: 50px;
    margin-top: 50px;
    text-align: center;
}

.ghost {
    transform: rotate(3deg) !important;
}
.ghost6 {
    background-color: #e3f3ff;
}
.design-control-item {
    position: relative;
    &-placeholder{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        opacity: .1;
        z-index: 2;
        background: #fff;
    }
    &:hover {
        background-color: #f1f2f3;
    }
}
</style>
