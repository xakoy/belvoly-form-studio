import { Property } from './property'

export class OptionsAlignProperty extends Property {
    constructor (defaultValue?: any) {
        super('optionsAlign', () => import('./OptionsAlign.vue'), defaultValue)
    }
}
