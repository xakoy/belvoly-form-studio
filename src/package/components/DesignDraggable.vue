<template>
    <draggable :tag="tag" v-model="controls" :group="{ name: 'design-zone', pull: 'clone', put: false }" :sort="false" :clone="cloneDog">
        <template v-for="(control, index) in controls">
            <slot v-bind:control="control" v-bind:index="index" />
        </template>
    </draggable>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import { createControlInstance } from '../controls/controlUtil'

@Component({
    components: {
        draggable
    }
})
export default class Index extends Vue {
    @Prop() controls
    @Prop() beginIndex
    @Prop() tag

    get dragOptions() {
        return {
            animation: 200,
            group: 'description',
            disabled: false,
            ghostClass: 'ghost6'
        }
    }

    cloneDog(e: any) {
        return createControlInstance(e)
    }
}
</script>
