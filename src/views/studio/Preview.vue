<template>
    <div class="bfs-preview-box" :class="{ 'bfs-preview-box-mobile': mode === 'mobile' }">
        <div class="bfs-preview-box-layout">
            <el-radio-group v-model="mode">
                <el-radio-button label="pc"> P C </el-radio-button>
                <el-radio-button label="mobile">MOBILE</el-radio-button>
            </el-radio-group>
        </div>
        <div class="bfs-preview-box-content">
            <design :canMove="canMove" :key="mode" :allControls="allControls" :mobile="mode === 'mobile'" ref="viewer" itemValueField="id" :defaultModel="designModel"></design>
        </div>
        <div>
            <el-button @click="saveHandler">
                保存
            </el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

import { DesignModel, IControl } from '../../package/form-studio/interface'
import { Design } from '../../package/form-studio/components'
import { controls } from './controls'

@Component({
    components: {
        // Viewer
        Design
    }
})
export default class Preview extends Vue {
    @Prop() designModel: DesignModel | undefined

    allControls = controls
    mode = 'pc'

    async saveHandler() {
        const viewer = this.$refs.viewer as any
        try {
            const valid = await viewer.validate()
            if (valid) {
                const data = viewer.getData()
                this.$message.success(JSON.stringify(data))
            }
        } catch (e) {}
    }

    canMove(control: IControl) {
        return !control.config.isLayout
    }
}
</script>

<style lang="less">
.bfs-preview-box {
    position: relative;
    &-layout {
        position: absolute;
        width: 100%;
        text-align: center;
        top: -80px;
    }

    .bfs-design-item-container-placeholder {
        display: none;
    }
    .bfs-design-item-container-editarea {
        display: none;
    }
}

.bfs-preview-box-mobile {
    background: #eee;

    .bfs-preview-box-content {
        width: 375px;
        height: 667px;
        overflow: auto;
        margin: 0 auto;
        border: 1px solid #ccc;
        background: #fff;
    }
}
</style>
