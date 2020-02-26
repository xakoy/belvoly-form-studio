import { IPluginObject } from '.'
import BelvolyFormStudio from '../studio'
import { FieldNamePropertyControlPlugin } from './field/name'

class FieldNamePlugin implements IPluginObject<any> {
    install (studio: BelvolyFormStudio, options) {
        studio.property(new FieldNamePropertyControlPlugin(), { name: options && options.name })
    }
}

const fieldNamePlugin = new FieldNamePlugin()

export {
    fieldNamePlugin
}
