import { Property } from './property'

export class TextAlignProperty extends Property {
    constructor (defaultValue?: any) {
        super('textAlign', () => import('./TextAlign.vue'), defaultValue)
    }
}
