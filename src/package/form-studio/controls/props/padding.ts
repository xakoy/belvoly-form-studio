import { Property } from './property'
import Editor from './Padding.vue'

export class PaddingProperty extends Property {
    constructor (defaultValue?: any) {
        super('padding', Editor, defaultValue)
    }
}
