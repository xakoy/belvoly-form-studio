import { Property } from './property'
import Editor from './Placeholder.vue'

export class PlaceholderProperty extends Property {
    constructor(defaultValue?: any) {
        super('placeholder', Editor, defaultValue)
    }
}
