import { IRule, IControl } from '@/components/interface'

export class TextTypeRule implements IRule<string> {
    ruleName: string = 'type'
    defaultValue = null
    editor: any = () => import('./TextType.vue')
    getRule (value: any, control: IControl, vue: Vue) {
        if (!value) {
            return null
        }
        let rule = null
        switch (value) {
        case 'email':
            rule = { type: 'email', message: '输入email格式，示例：xxxx@domain.com' }
            break
        case 'url':
            rule = { type: 'url', message: '输入url格式，示例：http://www.domain.com' }
            break
        }
        return rule
    }
}
