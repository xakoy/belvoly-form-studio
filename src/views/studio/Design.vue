<template>
    <div class="studio-design">
        <div class="studio-design-header">
            <el-button @click="selectControlVisible = true">
                添加控件
            </el-button>
            <el-button @click="dargSelectControlVisible = true">
                添加控件2
            </el-button>
            <el-button @click="previewHandler">
                预览
            </el-button>
        </div>
        <div class="studio-design-zone">
            <design
                :class="{ [$style.dragActive]: isDrag }"
                :extra="extra"
                :begin-index.sync="controlIndex"
                ref="designer"
                v-model="defaultModel"
                placeholder="添加控件到该区域"
                :dragOptions="dragOptions"
                @dragStart="moveStartHandler"
                @dragEnd="moveEndHandler"
            >
                <template v-slot:placeholder>
                    添加控件到该区域
                </template>
            </design>
        </div>
        <div class="studio-design-dragselectcontrol" :style="{ display: dargSelectControlVisible ? 'block' : 'none' }">
            <design-draggable :controls="controls" tag="ul" :begin-index.sync="controlIndex">
                <template v-slot:default="{ control, index }">
                    <li :key="index" @click="selectItemClick(control)">{{ control.config.text }}</li>
                </template>
            </design-draggable>
            <el-button @click="dargSelectControlVisible = false">
                关闭
            </el-button>
        </div>
        <el-dialog :visible.sync="selectControlVisible" title="选中控件" width="400">
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
import { DesignDraggable, Design } from '@/package/components'
import Preview from './Preview.vue'
import Component from 'vue-class-component'
import { controls, Empty } from './controls'
import { DesignModel, IControl } from '../../package/interface'

@Component({
    components: {
        Design,
        DesignDraggable,
        Preview
    }
})
export default class DesignStudio extends Vue {
    selectControlVisible = false
    dargSelectControlVisible = false
    previewDialogVisible = false
    controls = controls
    designPreviewModel = null
    controlIndex = 1

    defaultModel: DesignModel = {
        controls: [],
        form: {}
    }

    extra = {
        placeClick: this.placeClickHandler
    }

    dragOptions = {
        handle: '.handle',
        forceFallback: true
    }
    isDrag = false

    placeClickHandler(place) {
        place.replace(Empty)
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

    moveStartHandler() {
        document.body.style.overflow = 'hidden'
        this.isDrag = true

        console.log('开始移动')
    }

    moveEndHandler() {
        document.body.style.overflow = 'auto'

        this.isDrag = false
        console.log('结束移动')
    }
}
</script>

<style lang="less">
.studio-design {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    &-header {
        height: 80px;
    }
    &-zone {
        flex: 1;
    }
    &-dragselectcontrol {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
        z-index: 99;
    }
}
</style>

<style lang="less" module>
.dragActive {
    //
    :global {
        .bfs-design-item-container:not([name='grid']) {
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 2px 6px 0 rgba(0, 0, 0, 0.075);
            height: 46px;
            overflow: hidden;
            margin-bottom: 10px;
            > div {
                display: none;
            }
        }
        .bfs-design-zone-ghost {
            background: red !important;
        }
        .bfs-design-zone-chosen {
            background: yellow !important;
        }
    }
}
:global {
    .bfs-design-zone-curdrag {
        background: green !important;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 2px 6px 0 rgba(0, 0, 0, 0.075);
        height: 46px !important;
        overflow: hidden;
        margin-bottom: 10px;
        > div {
            display: none;
        }
    }
}
</style>
