import Text from './text'
import NumberControl from './number'
import Title from './title'
import Radio from './radio'
import { Divider, DividerConfig } from './divider'
import { Config, IControl } from './config'

const controls: IControl[] = [
    Text,
    NumberControl,
    Title,
    Radio,
    { config: DividerConfig, component: Divider }
]

export default controls

export {
    IControl
}
