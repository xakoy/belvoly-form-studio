import { IPluginObject } from '../plugins'
import BelvolyFormStudio from '../studio'
import { FieldPropertyControlPlugin } from './field'

class FieldPlugin implements IPluginObject<any> {
    install (studio: BelvolyFormStudio, options) {
        studio.property(new FieldPropertyControlPlugin(), { name: options.name })
    }
}

const fieldPlugin = new FieldPlugin()

export {
    fieldPlugin
}
