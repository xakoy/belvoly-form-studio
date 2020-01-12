import { Config, IControl } from '../config'
import Component from './Index.vue'
import Editor from './PropertyEditor.vue'

type TYPE = 'date' | 'datetime'

const config: Config = {
    name: 'date',
    text: '日期',
    icon: 'task_custom_today',
    prop: {
        label: '日期',
        /**
         * 默认值
         */
        defaultValue: null,
        /**
         * 是日期还是日期时间
         */
        type: 'date' as TYPE,
        /**
         * 值格式
         */
        format: 'yyyy-MM-dd',
        rule: {
            required: false
        }
    }
}

const control: IControl = {
    config: config,
    component: Component,
    propertyEditor: Editor
}

export default control
