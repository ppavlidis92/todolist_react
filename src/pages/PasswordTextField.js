import { changeText as onChange } from '../models/test/actions';
import withProps from './withProps';
import {password} from '../models/test/selectors'
import { changePassword } from '../models/test/actions';

const TextField = ({placeholder, changePassword, password}) => {
    console.log(placeholder)
    return (
        <input value={password} onChange={(event)=>changePassword(event.target.value)} />
    )
    }

    export default withProps({password},{changePassword})(TextField)