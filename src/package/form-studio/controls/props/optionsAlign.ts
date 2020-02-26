import { Property } from './property'
import Editor from './OptionsAlign.vue'

export class OptionsAlignProperty extends Property {
    constructor(defaultValue?: any) {
        super('optionsAlign', Editor, defaultValue)
    }
}
