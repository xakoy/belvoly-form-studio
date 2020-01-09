<template>
    <div class="control">
        <dl>
            <dt>文本框</dt>
            <dd>
                <input placeholder="请填写文本内容" />
            </dd>
        </dl>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Config } from './config'

export default Vue.extend({
    props: ['config'],
    computed: {
        options () {
            return this.config as Config
        }
    }
})
</script>

<style lang="less">
.control {
    padding: 0 15px 12px 12px;

    &:hover{
        background: #f1f2f3;
    }

    .active{
        background: #e3f3ff;
    }

    dt {
        height: 32px;
        line-height: 32px;
        color: #757575 !important;
        font-size: 13px;
    }
}
input{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    resize: none;
    height: 36px;
    line-height: 36px;
    width: 100%;
    padding: 0 7px;
    border: 1px solid #ddd;
    border-radius: 3px;
}

</style>
