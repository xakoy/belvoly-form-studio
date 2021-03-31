import { IControl } from './interface'

interface RenderControlIdFactory {
    (control: IControl): string
}

function defaultRenderControlIdFactory(control: IControl) {
    return (
        Math.random()
            .toString()
            .substr(3, length) + Date.now().toString(36)
    )
}

let factory: RenderControlIdFactory = defaultRenderControlIdFactory

/**
 * 获取唯一ID
 * @param length 随机数长度
 */
export function getUnniID(control: IControl) {
    return factory(control)
}

export function setRenderControlIDFactory(renderFactory: RenderControlIdFactory) {
    factory = renderFactory
}
