import { Property } from './property'
import Editor from './MaxLength.vue'

export class MaxLengthProperty extends Property {
    constructor(defaultValue: any) {
        super('maxLength', Editor, defaultValue)
    }
}
