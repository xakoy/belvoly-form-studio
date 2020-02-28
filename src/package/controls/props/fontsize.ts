import { Property } from './property'
import Editor from './FontSize.vue'

export class FontSizeProperty extends Property {
    constructor(defaultValue?: any) {
        super('fontsize', Editor, defaultValue)
    }
}
