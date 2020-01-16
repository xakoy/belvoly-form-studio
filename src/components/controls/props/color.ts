import { Property } from './property'

export class ColorProperty extends Property {
    constructor (defaultValue?: any) {
        super('color', import('./Color.vue'), defaultValue)
    }
}
