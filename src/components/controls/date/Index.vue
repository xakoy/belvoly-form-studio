<template>
    <basic :config="config">
        <el-time-picker v-if="type==='time'" :value="value" @input="inputChangeHandler"></el-time-picker>
        <el-date-picker v-else :type="type" :value="value" @input="inputChangeHandler" :value-format="format" :format="format"></el-date-picker>
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

    get prop () {
        return this.config.prop
    }
    get type () {
        return this.prop.type
    }
    get format () {
        return this.prop.format
    }
    get rule () {
        return this.prop.rule
    }

    inputChangeHandler (e) {
        this.$emit('input', e)
    }

    getRules () {
        const rules = []
        const { required } = this.rule
        if (required) rules.push({ required: true, message: `请选择${this.prop.label}` })
        return rules
    }
}
</script>
