<template>
    <div class="code-container">
        <div ref="jsoncodeeditor"></div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import * as monaco from 'monaco-editor'
export default Vue.extend({
    props: ['value'],
    mounted () {
        const editor = monaco.editor.create(this.$refs.jsoncodeeditor, {
            value: this.value,
            language: 'json',
            lineNumbers: 'on',
            formatOnType: true
        })
        setTimeout(async () => {
            await editor.getAction('editor.action.formatDocument').run()
            editor.updateOptions({
                readOnly: true
            })
        }, 500)
    }
})
</script>

<style lang="less">
.code-container{
    height: 500px;
    > div {
        height: 100%;
    }
}
</style>
