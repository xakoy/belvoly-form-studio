<template>
<div class="form-design">
    <div class="form-design-header">
        <el-row>
            <el-col :span="8">
                <h3>
                    表单设置：<text><span style="color:#FF0000">（修改表单设计将会丢失原有数据，请慎重操作）</span></text>
                </h3>
            </el-col>
            <el-col :span="16" style="text-align: right">
                <el-button size="small" @click="exportJsonHandler">导入JSON</el-button>
                <el-button size="small" @click="getModelHandler">获取JSON</el-button>
                <el-button size="small" @click="clearHandler">清空</el-button>
                <el-button size="small" @click="preview">预览</el-button>
            </el-col>
        </el-row>
    </div>
    <div class="form-design-container">
        <design :defaultModel="designDefaultModel" ref="designer"></design>
    </div>
    <el-dialog
        width="1200px"
        title="预览表单"
        v-if="previewDialogVisible"
        :visible.sync="previewDialogVisible"
    >
        <preview  :designModel="designModel"></preview>
    </el-dialog>
    <el-dialog
        width="800px"
        title="设计JSON"
        v-if="jsonDialogVisible"
        :visible.sync="jsonDialogVisible"
    >
        <code-editor :readonly="true" :value="jsoncode"></code-editor>
    </el-dialog>
    <el-dialog
        width="800px"
        title="导入JSON"
        v-if="jsonExportDialogVisible"
        :visible.sync="jsonExportDialogVisible"
    >
        <code-editor v-model="jsoncode"></code-editor>
        <div slot="footer" class="dialog-footer">
            <el-button @click="jsonExportDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="exportJsonOkHandler">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Design from '../components/Design.vue'
import Preview from './Preview.vue'
import CodeEditor from './components/Code.vue'

export default Vue.extend({
    components: {
        Design,
        Preview,
        CodeEditor
    },
    data () {
        return {
            previewDialogVisible: false,
            jsonExportDialogVisible: false,
            jsonDialogVisible: false,
            jsoncode: '',
            designModel: null,
            designDefaultModel: null
        }
    },
    methods: {
        preview () {
            const model = (this.$refs.designer.getModel())
            this.designModel = model
            this.previewDialogVisible = true
        },
        getModelHandler () {
            const model = (this.$refs.designer.getModel())
            this.jsoncode = JSON.stringify(model)
            this.jsonDialogVisible = true
        },
        exportJsonHandler () {
            this.jsoncode = JSON.stringify({})
            this.jsonExportDialogVisible = true
        },
        exportJsonOkHandler () {
            let json = null
            try {
                json = JSON.parse(this.jsoncode)
            } catch (e) {
                this.$message.error('JSON 格式解析错误，请检查格式：\n' + e.message)
            }
            if (json) {
                this.jsonExportDialogVisible = false
                this.designDefaultModel = json
            }
        },
        clearHandler () {
            this.$confirm('此操作将清空设计区, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$refs.designer.clear()
            }).catch(() => { })
        }
    }
})
</script>

<style lang="less">
.form-design {
    height: 100%;
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
