<template>
    <div class="studio-design">
        <div class="studio-design-header">
            <el-button @click="selectControlVisible = true">
                添加组件
            </el-button>
            <el-button @click="previewHandler">
                预览
            </el-button>
        </div>
        <div class="studio-design-zone">
            <design ref="designer" v-model="defaultModel" placeholder="添加组件到该区域" />
        </div>
        <el-dialog :visible.sync="selectControlVisible" title="选中组件" width="400">
            <div>
                <ul>
                    <li v-for="(item, index) in controls" :key="index" @click="selectItemClick(item)">{{ item.config.text }}</li>
                </ul>
            </div>
        </el-dialog>
        <el-dialog width="80%" title="预览" v-if="previewDialogVisible" :visible.sync="previewDialogVisible">
            <preview :designModel="designPreviewModel"></preview>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Design from '@/package/studio/compontents/Design.vue'
import Preview from './Preview.vue'
import Component from 'vue-class-component'
import { controls } from './controls'
import { DesignModel, IControl } from '../../package/form-studio/interface'

@Component({
    components: {
        Design,
        Preview
    }
})
export default class DesignStudio extends Vue {
    selectControlVisible = false
    previewDialogVisible = false
    controls = controls
    designPreviewModel = null

    defaultModel: DesignModel = {
        controls: [],
        form: {}
    }

    selectItemClick(control: IControl) {
        ;(this.$refs.designer as any).addControl(control)
        this.selectControlVisible = false
    }

    previewHandler() {
        const model = (this.$refs.designer as any).getModel()
        this.designPreviewModel = model
        this.previewDialogVisible = true
    }
}
</script>

<style lang="less">
.studio-design {
    height: 100%;
    display: flex;
    flex-direction: column;
    &-header {
        height: 80px;
    }
    &-zone {
        flex: 1;
    }
}
</style>
