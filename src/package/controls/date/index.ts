import { Config, IControl } from '../config'
import Component from './Index.vue'
import { LabelProperty, RequiredRule } from '../props'
import { IProperty } from '../../interface'
import { Property } from '../props/property'
import TypePropertyEditor from './TypeProperty.vue'
import FormatPropertyEditor from './FormatProperty.vue'

type TYPE = 'date' | 'datetime'

const config: Config = {
    name: 'date',
    text: '日期',
    icon: 'task_custom_today',
    isData: true,
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
        format: 'yyyy-MM-dd'
    },
    rule: {
        required: false
    }
}

const props: IProperty[] = [
    new LabelProperty('日期'),
    new Property('type', TypePropertyEditor, 'date'),
    new Property('format', FormatPropertyEditor, 'yyyy-MM-dd')
]

const control: IControl = {
    config: config,
    component: Component,
    propertys: props,
    rules: [
        new RequiredRule((control) => `请选择${control.config.prop.label}`)
    ]
}

export default control
