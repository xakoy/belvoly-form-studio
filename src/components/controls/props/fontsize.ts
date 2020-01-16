import { Property } from './property'

export class FontSizeProperty extends Property {
    constructor (defaultValue?: any) {
        super('fontsize', import('./FontSize.vue'), defaultValue)
    }
}
