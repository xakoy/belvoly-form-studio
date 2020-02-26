<template>
    <basic :config="config" :readonly="isReadonly">
        <span v-if="isReadonly">{{ text }}</span>
        <template v-else>
            <el-time-picker v-if="type==='time'" :value="value" @input="inputChangeHandler" :placeholder="placeholder"></el-time-picker>
            <el-date-picker v-else :type="type" :value="value" @input="inputChangeHandler" :value-format="format" :format="format" :placeholder="placeholder"></el-date-picker>
        </template>
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
    @Prop({ default: false }) readonly readonly!: Boolean

    get prop () {
        return this.config.prop
    }
    get type () {
        return this.prop.type
    }
    get format () {
        return this.prop.format
    }
    get placeholder () {
        return this.prop.placeholder || `请选择${this.type === 'time' ? '时间' : '日期'}`
    }
    get isReadonly () {
        return this.readonly
    }
    get text () {
        return this.value
    }

    inputChangeHandler (e) {
        this.$emit('input', e)
    }
}
</script>
