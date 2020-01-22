import { Property } from './property'
import Editor from './Options.vue'

export class OptionsProperty extends Property {
    constructor (defaultValue?: any) {
        super('options', Editor, defaultValue)
    }
}
