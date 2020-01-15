import { Property } from './property'

export class LabelProperty extends Property {
    constructor (defaultValue: any) {
        super('label', () => import('./Label.vue'), defaultValue)
    }
}
