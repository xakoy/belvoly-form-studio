<template>
    <basic :config="config">
        <el-date-picker :value="value" @input="$emit('input', $event)"></el-date-picker>
    </basic>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Basic from '../Basic.vue'

@Component({
    components: {
        Basic
    }
})
export default class Date extends Vue {
    @Prop() config
    @Prop() value
}
</script>
