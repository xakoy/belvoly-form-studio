import { Property } from './property'

export class MaxLengthProperty extends Property {
    constructor (defaultValue: any) {
        super('maxLength', import('./MaxLength.vue'), defaultValue)
    }
}
