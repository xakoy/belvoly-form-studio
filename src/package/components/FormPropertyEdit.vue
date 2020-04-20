<template>
    <div>
        <dl>
            <dt>必填显示红点</dt>
            <dd>
                <el-switch v-model="item.showRequiredAsterisk"></el-switch>
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
        <dl v-show="item.labelPosition === 'left' || item.labelPosition === 'right'">
            <dt>控件文本宽度</dt>
            <dd>
                <el-input placeholder="请输入宽度" v-model="item.labelWidth">
                    <template slot="append">px</template>
                </el-input>
            </dd>
        </dl>
        <dl>
            <dt>文本后缀</dt>
            <dd>
                <el-input v-model="item.labelSuffix" placeholder="请输入文本后缀" />
            </dd>
        </dl>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class FormPropertyEdit extends Vue {
    @Prop() value

    get item() {
        return this.value || {}
    }
}
</script>
