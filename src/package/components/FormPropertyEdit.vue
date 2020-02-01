<template>
    <div>
        <dl>
            <dt>必填显示红点</dt>
            <dd>
                <el-switch v-model="item.requiredShowPoint"></el-switch>
            </dd>
        </dl>
        <dl>
            <dt>控件布局方式</dt>
            <dd>
                <el-radio-group v-model="item.labelPosition" size="small">
                    <el-radio-button label="left">左对齐</el-radio-button>
                    <el-radio-button label="right">右对齐</el-radio-button>
                    <el-radio-button label="top">顶部对齐</el-radio-button>
                </el-radio-group>
            </dd>
        </dl>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class FormPropertyEdit extends Vue {
    @Prop() value

    get item () {
        return this.value || {}
    }
}
</script>
