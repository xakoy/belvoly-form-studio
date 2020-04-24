import Compontent from './Index.vue'
import { IControl, IConfig } from '../../interface'
import { Property } from '../props/property'
import ColsPropertyEditor from './ColsPropertyEditor.vue'
import GutterPropertyEditor from './GutterPropertyEditor.vue'

const config: IConfig = {
    name: 'grid',
    text: '栅格布局',
    icon: 'text',
    isLayout: true,
    prop: {
        gutter: 0,
        cols: [
            {
                id: 1,
                span: 12
            },
            {
                id: 2,
                span: 12
            }
        ]
    }
}

const control: IControl = {
    config: config,
    component: Compontent,
    propertys: [new Property('cols', ColsPropertyEditor, null), new Property('gutter', GutterPropertyEditor, null, true)],
    child: []
}

export default control
