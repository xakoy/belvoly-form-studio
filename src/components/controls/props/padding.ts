import { Property } from './property'

export class PaddingProperty extends Property {
    constructor (defaultValue?: any) {
        super('padding', import('./Padding.vue'), defaultValue)
    }
}
