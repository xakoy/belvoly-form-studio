import { registerPlugin, registerGlobalPlugin } from './controls'
import { IPropertyControlPlugin } from './interface'
import { IPluginObject } from './plugins'

class BelvolyFormStudio {
    use<T> (plugin: IPluginObject<T>, options) {
        const { install } = plugin
        install(this, options as any)
    }

    property (propertyPlugin: IPropertyControlPlugin, { name }: { name?: string}) {
        if (name) {
            registerPlugin(name, propertyPlugin)
        } else {
            registerGlobalPlugin(propertyPlugin)
        }
    }
}

export default BelvolyFormStudio
