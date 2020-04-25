<template>
    <div class="webpart-item-place">
        <div class="webpart-item-place-plus" @click.stop="clickHandler">
            +
        </div>
        <div class="webpart-item-place-delete" @click.stop="deleteHandler">
            删除
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
    @Prop() extra
    @Prop() control
    clickHandler() {
        const { placeClick } = this.extra
        placeClick && placeClick(this)
        console.log(`log`)
    }

    replace(control) {
        const zone: any = this.findDesignZone()
        zone.replaceControl(control, this.control)
    }

    deleteHandler() {
        const zone: any = this.findDesignZone()
        zone.removeControl(this.control)
    }

    findDesignZone() {
        let parent = this.$parent
        let parentName = parent.$options.name
        while (parentName !== 'BfsDesignZone') {
            parent = parent.$parent
            parentName = parent.$options.name
        }
        return parent
    }
}
</script>

<style lang="less">
.webpart-item-place {
    border: 1px dashed #ccc;
    margin-bottom: 20px;
    text-align: center;
    &-plus {
        font-size: 120px;
        line-height: 200px;
    }

    &-delete {
        font-size: 16px;
        line-height: 40px;
        background: #999;
        cursor: pointer;
    }
}
</style>
