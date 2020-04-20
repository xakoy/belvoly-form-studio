import { Property } from './property'
import Editor from './Label.vue'

export class LabelProperty extends Property {
    constructor(defaultValue?: any) {
        super('label', Editor, defaultValue)
    }
}
