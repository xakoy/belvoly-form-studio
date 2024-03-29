<template>
    <div class="bfs-control-guid" :class="{ 'bfs-control-guid-designmode': isNeedSuportDisplay && isInDesignMode }">
        <el-row :gutter="isNeedSuportDisplay && isInDesignMode ? gutter : gutter">
            <template v-for="(col, index) in cols">
                <el-col :key="col.id" :span="mobile ? 24 : col.span">
                    <div class="bfs-control-guid-zone">
                        <design-zone
                            v-if="isInDesignMode"
                            v-model="Tuple[col.id]"
                            @change="changeHandler"
                            :currentEditControl="currentEditControl"
                            @itemClick="controlClickHandler"
                            @itemRemove="controlRemoveClickHandler"
                            @itemAdd="controlAddedHandler"
                            @itemDbClick="controlDbClickHandler"
                        ></design-zone>
                        <viewer-zone v-else :formModel="formModel" :readonly="readonly" :itemValueField="itemValueField" :controls="control.child[index]"></viewer-zone>
                    </div>
                </el-col>
            </template>
            <!-- <el-col :span="mobile ? 24: 12">
                <div class="bfs-control-guid-zone">
                    <design-zone v-if="isInDesignMode" v-model="ListOne" @change="changeHandler" :currentEditControl="currentEditControl" @itemClick="controlClickHandler" @itemRemove="controlRemoveClickHandler"></design-zone>
                    <viewer-zone v-else :formModel="formModel" :itemValueField="itemValueField" :controls="control.child[0]"></viewer-zone>
                </div>
            </el-col>
            <el-col :span="mobile ? 24: 12">
                <div class="bfs-control-guid-zone">
                    <design-zone  v-if="isInDesignMode" v-model="ListTwo" @change="changeHandler" :currentEditControl="currentEditControl" @itemClick="controlClickHandler" @itemRemove="controlRemoveClickHandler"></design-zone>
                    <viewer-zone v-else :formModel="formModel" :itemValueField="itemValueField" :controls="control.child[1]"></viewer-zone>
                </div>
            </el-col> -->
        </el-row>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject, Watch } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import DesignZone from '../../components/DesignZone.vue'
import ViewerZone from '../../components/ViewerZone.vue'
import Basic from '../Basic.vue'
import { IControl } from '../config'
import { SYMBOL_MODE_KEY, SYMBOL_MODE_DESIGN, SYMBOL_IN_MOBILE_KEY } from '../../symbol'
import { SYM_DESIGN_PROP_KEY, DesignPubPropModel } from '../../components/design-prop'
import { Row, Col } from 'element-ui'
@Component({
    components: {
        Basic,
        draggable,
        DesignZone,
        ViewerZone,
        ElRow: Row,
        ElCol: Col
    }
})
export default class Grid extends Vue {
    @Prop() readonly formModel
    @Prop() itemValueField
    @Prop() currentEditControl
    /**
     * 当前控件信息
     */
    @Prop() control: IControl
    @Prop() config
    @Prop() value

    /**
     * 是否只读模式
     */
    @Prop({ default: false }) readonly readonly!: boolean

    @Inject({ from: SYMBOL_MODE_KEY }) readonly mode!: any
    @Inject({ from: SYMBOL_IN_MOBILE_KEY, default: false }) readonly mobile!: boolean
    @Inject({ from: SYM_DESIGN_PROP_KEY, default: { isNeedSuportDisplay: true } }) designPubProp: DesignPubPropModel

    get isInDesignMode() {
        return this.mode === SYMBOL_MODE_DESIGN
    }

    get isNeedSuportDisplay() {
        return this.designPubProp.isNeedSuportDisplay
    }

    Tuple = {}
    drag = false

    mounted() {
        this.init()
    }

    @Watch('control')
    controlWatch(val, oldVal) {
        this.init()
    }

    init() {
        this.cols.forEach(col => {
            this.$set(this.Tuple, col.id, [])
        })
        const { child } = this.control
        if (child.length > 0) {
            for (let i = 0; i < child.length; i++) {
                const id = this.cols[i].id
                this.$set(this.Tuple, id, this.control.child[i])
            }
        }
    }

    get dragOptions() {
        return {
            animation: 200,
            group: 'description',
            disabled: false,
            ghostClass: 'ghost6'
        }
    }

    get cols(): any[] {
        return this.config.prop.cols
    }

    get gutter() {
        const { gutter } = this.config.prop
        return Number.isNaN(gutter) ? 0 : Number.parseInt(gutter)
    }

    controlClickHandler(...params) {
        this.$emit('itemClick', ...params)
    }
    controlDbClickHandler(...params) {
        this.$emit('itemDbClick', ...params)
    }
    controlAddedHandler(...params) {
        this.$emit('itemAdd', ...params)
    }

    controlRemoveClickHandler(control: IControl, extra) {
        this.changeHandler()
        this.$emit('itemRemove', control, extra)
    }

    changeHandler() {
        this.control.child = this.cols.map(col => this.Tuple[col.id])
        this.$emit('layoutChange')
    }
}
</script>

<style lang="less">
.bfs-control-guid {
    .form-design-content-drag {
        // min-height: 200px;
    }

    &-designmode &-zone {
        border: 1px dashed #cccccc;
        .bfs-design-zone-drag {
            > span {
                // padding: 20px 10px;
            }
        }
    }
}
</style>
