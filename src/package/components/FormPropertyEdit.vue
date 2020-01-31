<template>
    <div>
        <dl>
            <dt>必填显示红点</dt>
            <dd>
                <el-switch v-model="item.requiredShowPoint"></el-switch>
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
