<template>
    <basic :config="config">
        <input placeholder="请填写数值内容" />
    </basic>
</template>

<script lang="ts">
import Vue from 'vue'
import Basic from '../Basic.vue'
import { Config } from '../config'

export default Vue.extend({
    props: ['config'],
    components: {
        Basic
    },
    computed: {
        options () {
            return this.config as Config
        }
    }
})
</script>
