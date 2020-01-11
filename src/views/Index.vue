<template>
<div class="form-design">
    <div class="form-design-header">
        <el-row>
            <el-col :span="8">
                <h3>
                    表单设置：  <text><span style="color:#FF0000">（修改表单设计将会丢失原有数据，请慎重操作）</span></text>
                </h3>
            </el-col>
            <el-col :span="16" style="text-align: right">
                <el-button size="small" @click="preview">预览</el-button>
            </el-col>
        </el-row>
    </div>
    <div class="form-design-container">
        <design ref="designer"></design>
    </div>
    <!-- <div class="form-design-btn">
        <button class="btn" type="submit" id="formdrag-edit-save-btn">
            <i class="fa fa-save"></i>
            保存
        </button>
        <button class="btn" type="button" id="formdrag-edit-preview-btn">
            <i class="fa fa-eye"></i>
            预览
        </button>
        <button class="btn" type="button" id="formdrag-edit-cancel-btn">
            <i class="fa fa-close"></i>
            取消
        </button>
    </div> -->
    <el-dialog
        v-if="previewDialogVisible"
        :visible.sync="previewDialogVisible"
    >
        <preview :designModel="designModel"></preview>
    </el-dialog>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Design from './Design.vue'
import Preview from './Preview.vue'

export default Vue.extend({
    components: {
        Design,
        Preview
    },
    data () {
        return {
            previewDialogVisible: false,
            designModel: null
        }
    },
    methods: {
        preview () {
            const model = (<any> this.$refs.designer).getModel()
            this.designModel = model
            this.previewDialogVisible = true
        }
    }
})
</script>

<style lang="less">
.form-design {
    height: 100%;
    // overflow: hidden;
    &-header {
        h3 {
            font-weight: normal;
            font-size: 16px;
        }
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        padding: 0px 24px;
        text-align: left;
        position: absolute;
        width: 100%;
    }

    &-container {
        height: 100%;
    }
}
</style>
