import { Property } from './property'
import Editor from './TextAlign.vue'

export class TextAlignProperty extends Property {
    constructor(defaultValue?: any) {
        super('textAlign', Editor, defaultValue)
    }
}
