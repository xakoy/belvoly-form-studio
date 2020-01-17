<template>
    <div>
        <viewer ref="viewer" itemValueField="fieldName" :designModel="designModel"></viewer>
        <div>
            <el-button @click="saveHandler">
                保存
            </el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

import { DesignModel } from '../package/interface'
import { Viewer } from '../package/compontents'

@Component({
    components: {
        Viewer
    }
})
export default class Preview extends Vue {
    @Prop() designModel: DesignModel | undefined

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
