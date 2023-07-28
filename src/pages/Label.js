import { useSelector } from 'react-redux';
import withProps from './withProps';
import { isLoggedIn, textValue, count } from 'models/test/selectors';

const Label = ({isLoggedIn,textValue,count}) => {
 
    return isLoggedIn ? (
     <h1>
     Hello, {textValue}
     </h1>
    ) : (
        <h1>
           {`count ${count}`} 
        </h1>
    ) 
 }

 export default withProps({isLoggedIn,textValue,count},{})(Label)