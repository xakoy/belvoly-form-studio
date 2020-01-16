import { Property } from './property'

export class OptionsProperty extends Property {
    constructor (defaultValue?: any) {
        super('options', import('./Options.vue'), defaultValue)
    }
}
