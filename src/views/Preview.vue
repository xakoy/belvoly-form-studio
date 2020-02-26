<template>
    <div class="bfs-preview-box" :class="{'bfs-preview-box-mobile': mode === 'mobile'}">
        <div class="bfs-preview-box-layout">
            <el-radio-group v-model="mode">
                <el-radio-button label="pc"> P C </el-radio-button>
                <el-radio-button label="mobile">MOBILE</el-radio-button>
            </el-radio-group>
        </div>
        <div class="bfs-preview-box-content">
            <viewer :key="mode" :mobile="mode === 'mobile'" ref="viewer" itemValueField="id" :designModel="designModel"></viewer>
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

import { DesignModel } from '../package/form-studio/interface'
import { Viewer } from '../package/form-studio/components'

@Component({
    components: {
        Viewer
    }
})
export default class Preview extends Vue {
    @Prop() designModel: DesignModel | undefined

    mode = 'pc'

    async saveHandler () {
        const viewer = this.$refs.viewer as any
        try {
            const valid = await viewer.validate()
            if (valid) {
                const data = viewer.getData()
                this.$message.success(JSON.stringify(data))
            }
        } catch (e) {

        }
    }
}
</script>

<style lang="less">
.bfs-preview-box{
    position: relative;
    &-layout {
        position: absolute;
        width: 100%;
        text-align: center;
        top: -80px;
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
