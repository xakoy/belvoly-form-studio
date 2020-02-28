import { IRule, IControl } from '../../../interface'
import Editor from './Regexp.vue'

export class RegexpRule implements IRule<string> {
    ruleName = 'regexp'
    defaultValue = null
    editor: any = Editor
    getRule(value: any, control: IControl, vue: Vue) {
        if (!value) {
            return null
        }
        return { pattern: new RegExp(value), message: '格式不正确' }
    }
}
