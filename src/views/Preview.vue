<template>
    <div>
        <previewer :designModel="data"></previewer>
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
    data: DesignModel = {
        controls: [{
            name: 'title',
            prop: {
                color: '',
                label: '互联网软件请假单',
                fontsize: '24',
                textAlign: 'center',
                padding: {
                    top: 20,
                    bottom: 20,
                    left: 0,
                    right: 0
                }
            }
        }]
    }
}
</script>
