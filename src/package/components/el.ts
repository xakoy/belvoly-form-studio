import { Vue } from 'vue-property-decorator'

export default Vue.extend({
    props: {
        content: {}
    },
    render(h) {
        const { content } = this.$props

        if (!content) {
            return h('div')
        } else if (typeof content === 'string') {
            return h(content)
        }
        return this.content(this.$attrs)
    }
})
