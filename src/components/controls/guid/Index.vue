<template>
    <div class="bfs-control-guid" :class="{'bfs-control-guid-designmode': isInDesignMode}">
        <el-row :gutter="isInDesignMode ? 20: 0">
            <el-col :span="12">
                <div class="bfs-control-guid-zone">
                    <design-zone v-if="isInDesignMode" v-model="ListOne" @change="changeHandler" :currentEditControl="currentEditControl" @itemClick="controlClickHandler" @itemRemove="controlRemoveClickHandler"></design-zone>
                    <form-viewer-zone v-else :formModel="formModel" :itemValueField="itemValueField" :controls="control.child[0]"></form-viewer-zone>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="bfs-control-guid-zone">
                    <design-zone  v-if="isInDesignMode" v-model="ListTwo" @change="changeHandler" :currentEditControl="currentEditControl" @itemClick="controlClickHandler" @itemRemove="controlRemoveClickHandler"></design-zone>
                    <form-viewer-zone v-else :formModel="formModel" :itemValueField="itemValueField" :controls="control.child[1]"></form-viewer-zone>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject, Watch } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import DesignZone from '../../DesignZone.vue'
import FormViewerZone from '../../FormViewerZone.vue'
import Basic from '../Basic.vue'
import { IControl } from '../config'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_DESIGN } from '../../symbol'

@Component({
    components: {
        Basic,
        draggable,
        DesignZone,
        FormViewerZone
    }
})
export default class Guid extends Vue {
    @Prop() readonly formModel
    @Prop() itemValueField
    @Prop() currentEditControl
    /**
     * 当前控件信息
     */
    @Prop() control: IControl
    @Prop() config
    @Prop() value

    @Inject(SYMBOL_MODE_KEY) readonly mode!: Symbol

    get isInDesignMode () {
        return this.mode === SYMBOL_MODE_DESIGN
    }

    ListOne = []
    ListTwo =[]
    drag = false

    mounted () {
        this.ListOne = this.control.child[0]
        this.ListTwo = this.control.child[1]
    }

    @Watch('control')
    controlWatch (val, oldVal) {
        console.log(val)
        this.ListOne = val.child[0]
        this.ListTwo = val.child[1]
    }

    get dragOptions () {
        return {
            animation: 200,
            group: 'description',
            disabled: false,
            ghostClass: 'ghost6'
        }
    }

    controlClickHandler (control: IControl) {
        this.$emit('itemClick', control)
    }

    controlRemoveClickHandler (control: IControl) {
        this.changeHandler()
        this.$emit('itemRemove', control)
    }

    changeHandler () {
        this.control.child = [this.ListOne, this.ListTwo]
    }
}
</script>

<style lang="less">
.bfs-control-guid {
    .form-design-content-drag {
        min-height: 200px;
    }

    &-designmode &-zone {
        border: 1px dashed #cccccc;
    }
}
</style>
