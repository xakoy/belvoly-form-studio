<template>
    <div class="bfs-control-guid" :class="{ 'bfs-control-guid-designmode': isNeedSuportDisplay && isInDesignMode }">
        <el-row :gutter="isNeedSuportDisplay && isInDesignMode ? 0 : 0">
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
                        ></design-zone>
                        <viewer-zone v-else :formModel="formModel" :itemValueField="itemValueField" :controls="control.child[index]"></viewer-zone>
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

@Component({
    components: {
        Basic,
        draggable,
        DesignZone,
        ViewerZone
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

    @Inject(SYMBOL_MODE_KEY) readonly mode!: symbol
    @Inject({ from: SYMBOL_IN_MOBILE_KEY, default: false }) readonly mobile!: boolean
    @Inject({ from: SYM_DESIGN_PROP_KEY, default: {} }) designPubProp: DesignPubPropModel

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

    controlClickHandler(control: IControl) {
        this.$emit('itemClick', control)
    }

    controlRemoveClickHandler(control: IControl) {
        this.changeHandler()
        this.$emit('itemRemove', control)
    }

    changeHandler() {
        this.control.child = this.cols.map(col => this.Tuple[col.id])
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
