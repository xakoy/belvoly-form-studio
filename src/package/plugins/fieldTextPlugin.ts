import { IPluginObject } from '../plugins'
import BelvolyFormStudio from '../studio'
import { FieldTextPropertyControlPlugin } from './field/text'

class FieldTextPlugin implements IPluginObject<any> {
    install (studio: BelvolyFormStudio, options) {
        studio.property(new FieldTextPropertyControlPlugin(), { name: options && options.name })
    }
}

const fieldTextPlugin = new FieldTextPlugin()

export {
    fieldTextPlugin
}
