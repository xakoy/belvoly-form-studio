import Text from './text'
import NumberControl from './number'
import Title from './title'
import { Divider, DividerConfig } from './divider'
import { Config, IControl } from './config'

const controls: IControl[] = [
    Text,
    NumberControl,
    Title,
    { config: DividerConfig, component: Divider }
]

export default controls

export {
    IControl
}
