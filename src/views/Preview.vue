<template>
    <div>
        <previewer ref="viewer" itemValueField="fieldName" :designModel="designModel"></previewer>
        <div>
            <el-button @click="saveHandler">
                保存
            </el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import Previewer from '../components/FormViewer.vue'

import { DesignModel } from '../components/model'

@Component({
    components: {
        Previewer
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
