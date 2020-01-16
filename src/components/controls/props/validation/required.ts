import { IRule, IControl } from '@/components/interface'

type fun = (c: IControl) => string

export class RequiredRule implements IRule<boolean> {
    private message: string | fun = '请填写内容，不能为空'
    constructor (message?: string | fun) {
        this.message = message
    }
    ruleName: string = 'required'
    defaultValue: boolean = false
    editor: any = () => import('./Required.vue')
    getRule (value: any, control: IControl, vue: Vue) {
        if (!value) {
            return null
        }
        return { required: true, message: this.getMessage(control) }
    }

    private getMessage (control: IControl) {
        if (typeof this.message === 'function') {
            return this.message(control)
        }
        return this.message
    }
}