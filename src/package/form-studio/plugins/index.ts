import BelvolyFormStudio from '../studio'

export type IPluginFunction<T> = (plugin: BelvolyFormStudio, options?: T) => void

export interface IPluginObject<T> {
    install: IPluginFunction<T>
    [key: string]: any
}

export * from './fieldNamePlugin'
export * from './fieldTextPlugin'
