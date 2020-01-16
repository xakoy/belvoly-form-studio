import { IRule, IControl } from '@/components/interface'

export class RegexpRule implements IRule<string> {
    ruleName: string = 'regexp'
    defaultValue = null
    editor: any = () => import('./Regexp.vue')
    getRule (value: any, control: IControl, vue: Vue) {
        if (!value) {
            return null
        }
        return { pattern: new RegExp(value), message: '格式不正确' }
    }
}
