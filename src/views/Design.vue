<template>
    <div class="bfs-design">
        <div class="bfs-design-sider">
            <div class="bfs-design-controls-area">
                <h4>常用控件</h4>
                <draggable
                    class="bfs-design-controls"
                    v-model="list"
                    :group="{ name: 'design-zone', pull: 'clone', put: false }"
                    :sort="false"
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
        <div class="bfs-design-content">
            <design-zone v-model="contentList" @change="designContentChangeHandler" :currentEditControl="currentEditControl" @itemClick="controlClickHandler" @itemRemove="controlRemoveClickHandler"></design-zone>
        </div>
        <div class="bfs-design-property-editor">
            <div class="bpm-from-design-property-editor-container">
                <div class="edit-control">
                    <property-edit v-if="currentEditControl" :control="currentEditControl" :key="currentEditControl.id"></property-edit>
                </div>
                <div class="control-form-box hide">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import draggable from 'vuedraggable'
import controls, { IControl, createControls } from '../components/controls/index'
import PropertyEdit from '../components/controls/PropertyEdit.vue'
import { DesignModel, DesignControlModel } from '../components/model'
import DesignZone from '../components/DesignZone.vue'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_DESIGN } from '../components/symbol'

let index = 1

export default Vue.extend({
    props: {
        defaultModel: { }
    },
    components: {
        draggable,
        PropertyEdit,
        DesignZone
    },
    provide: {
        [SYMBOL_MODE_KEY]: SYMBOL_MODE_DESIGN
    },
    data () {
        return {
            list: controls,
            contentList: <IControl[]>[],
            drag: false,
            currentEditControl: null as any
        }
    },
    mounted () {

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
    watch: {
        defaultModel: function () {
            this.drawModelDesign()
        }
    },
    methods: {
        drawModelDesign () {
            if (this.defaultModel) {
                this.contentList = createControls(this.defaultModel)
            }
        },
        cloneDog (e: any) {
            const clone = {
                ...e,
                id: e.config.name + index++
            }
            clone.config = JSON.parse(JSON.stringify(clone.config))
            return clone
        },
        controlClickHandler (control: IControl) {
            this.currentEditControl = control
        },
        controlRemoveClickHandler (control: IControl) {
            this.currentEditControl = null
        },
        designContentChangeHandler () {

        },
        getModel () {
            const convertChild = (child: Array<any>) => {
                return child.map(item => {
                    return Array.isArray(item) ? convertChild(item) : convert(item)
                })
            }
            const convert = (control: IControl) => {
                const { id, config: { name, prop }, child } = control
                return {
                    id: id,
                    name: name,
                    prop: prop,
                    child: child ? convertChild(child) : null
                }
            }
            const model: DesignModel = {
                controls: this.contentList.map(c => convert(c))
            }
            return model
        }
    }
})
</script>

<style lang="less">
.bfs-design {
    height: 100%;
    box-sizing: border-box;
    padding-top: 50px;
    height: 100%;
    display: flex;
    flex: 1;
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
    &-sider{
        background: #f1f2f3;
        width: 300px;
        font-size: 12px;
        flex-shrink: 0;
    }
    &-controls-area {
        padding: 26px 20px;
        h4 {
            font-size: 13px;
            line-height: 1;
        }
    }
    &-controls {
        margin: 12px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &-property-editor{
        width: 350px;
        background-color: #fcfdfe;
        padding: 24px 20px;
        flex-shrink: 0;
    }
    &-content{
        height: 100%;
        flex: 1;
        border-right: 1px solid rgb(234, 234, 234);
        position: relative;
        overflow: auto;
    }
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
.ghost2 {
    transform: rotate(3deg) !important;
}
</style>
