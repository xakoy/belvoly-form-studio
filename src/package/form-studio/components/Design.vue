<template>
    <div class="bfs-studio-design">
        <design-zone
            v-model="contentList"
            :placeholder="placeholder"
            @change="designContentChangeHandler"
            :currentEditControl="currentEditControl"
            @itemClick="controlClickHandler"
            @itemRemove="controlRemoveClickHandler"
        ></design-zone>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Watch } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import controls, { createControls } from '../../form-studio/controls'
import PropertyEdit from '../controls/PropertyEdit.vue'
import FormPropertyEdit from './FormPropertyEdit.vue'
import { DesignModel, DesignControlModel, IControl, FormPropertyModel } from '../../form-studio/interface'
import DesignZone from '../../form-studio/components/DesignZone.vue'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_DESIGN, SYMBOL_FORM_PROPERTY_KEY } from '../../form-studio/symbol'

let index = 1

@Component({
    components: {
        DesignZone
    }
})
export default class Design extends Vue {
    @Prop() beginIndex: number
    @Prop() placeholder: string
    /**
     * 设计器生成的模型数据，Viewer根据此模型数据渲染表单
     */
    @Prop() defaultModel
    /**
     * 所有的控件集合，如果不为空，则解析的控件从这些控件中查找
     */
    @Prop() allControls: IControl[]

    @Provide(SYMBOL_MODE_KEY) mode = SYMBOL_MODE_DESIGN

    list = controls
    contentList: IControl[] = []
    currentEditControl: any = null
    propertyTabName = 'control'

    mounted() {
        if (this.defaultModel) {
            this.watchDefaultModel()
        }
    }

    @Watch('defaultModel')
    watchDefaultModel() {
        this.drawModelDesign()
    }
    @Watch('defaultControls')
    watchDefaultControls(val) {
        this.contentList = val
    }

    formProperty = {}

    setFormProperty(property) {
        Object.keys(property).forEach(key => {
            this.$set(this.formProperty, key, property[key])
        })
    }
    drawModelDesign() {
        if (this.defaultModel) {
            if (this.defaultModel.controls) {
                this.contentList = createControls(this.defaultModel, this.allControls)
            }
        } else {
            this.clear()
        }
    }

    cloneDog(e: any) {
        let newIndex = 0
        if (this.beginIndex) {
            newIndex = this.beginIndex + 1
            this.$emit('update:beginIndex', newIndex)
        } else {
            newIndex = index++
        }
        const clone = {
            ...e,
            id: e.config.name + newIndex
        }
        clone.config = JSON.parse(JSON.stringify(clone.config))
        return clone
    }

    controlClickHandler(control: IControl) {
        this.currentEditControl = control
        this.propertyTabName = 'control'
    }

    addControl(control: IControl) {
        const clone = this.cloneDog(control)
        this.contentList.push(clone)
    }
    controlRemoveClickHandler(control: IControl) {
        this.currentEditControl = null
    }
    designContentChangeHandler() {
        this.$emit('change')
    }
    getModel() {
        const convertChild = (child: any[]) => {
            return child.map(item => {
                return Array.isArray(item) ? convertChild(item) : convert(item)
            })
        }
        const convert = (control: IControl) => {
            const {
                id,
                config: { name, prop, rule, isLayout, isData },
                child
            } = control
            const result: DesignControlModel = {
                id: id,
                name: name,
                isLayout: isLayout,
                isData: isData,
                prop: prop,
                rule: rule
            }
            if (child) {
                result.child = convertChild(child)
            }
            return result
        }
        const model: DesignModel = {
            controls: this.contentList.map(c => convert(c)),
            form: { ...this.formProperty }
        }
        return model
    }
    clear() {
        this.contentList = []
        this.currentEditControl = null
    }
}
</script>

<style lang="less">
.bfs-studio-design {
    height: 100%;
}
</style>
