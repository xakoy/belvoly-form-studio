import Text from './text'
import NumberControl from './number'
import Title from './title'
import Radio from './radio'
import Checkbox from './checkbox'
import Divider from './divider'
import { Config, IControl } from './config'

const controls: IControl[] = [
    Text,
    NumberControl,
    Radio,
    Checkbox,
    Title,
    Divider
]

export default controls

export {
    IControl
}
