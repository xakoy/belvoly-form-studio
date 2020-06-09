<template>
    <draggable :tag="tag" v-model="controls" :group="{ name: 'design-zone', pull: 'clone', put: false }" :sort="false" :clone="cloneHandler">
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
export default class DesignDraggable extends Vue {
    @Prop() controls
    @Prop() beginIndex
    @Prop() tag

    @Prop() clone

    get dragOptions() {
        return {
            animation: 200,
            group: 'description',
            disabled: false,
            ghostClass: 'ghost6'
        }
    }

    cloneHandler(e: any) {
        if (this.clone) {
            return this.clone(e)
        } else {
            return this.cloneDog(e)
        }
    }

    cloneDog(e: any) {
        return createControlInstance(e)
    }
}
</script>
