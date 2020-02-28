import { Property } from './property'
import Editor from './Color.vue'

export class ColorProperty extends Property {
    constructor(defaultValue?: any) {
        super('color', Editor, defaultValue)
    }
}
