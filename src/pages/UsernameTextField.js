import { changeText as onChange } from '../models/test/actions';
import withProps from './withProps';
import {textValue} from '../models/test/selectors'


const TextField = ({placeholder, onChange, textValue}) => {
    console.log(placeholder)
    return (
        <input value={textValue} onChange={(event)=>onChange(event.target.value)} />
    )
    }

    export default withProps({textValue},{onChange})(TextField)