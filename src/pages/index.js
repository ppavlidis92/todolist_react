import { Provider, useDispatch, useSelector } from 'react-redux';
import reducer from '../models/test/reducer';
import UsernameTextField from './UsernameTextField';
import Label from './Label';
import { changeText } from '../models/test/actions';
import { textValue } from '../models/test/selectors';
import { useRadioGroup } from '@mui/material';
import PasswordTextField from './PasswordTextField';
import Button from './Button';
import store from './store';
import ModelProvider from './modelProvider';

// import { Home } from 'routes';

// export default Home;

export default () => {
    console.log('Home');
    return (
        <ModelProvider>           
        <h1>Username</h1>
        <UsernameTextField placeholder={'hi'}/>
        <h1>Password</h1>
        <PasswordTextField placeholder={'hi'}/>
        <Button/>
        <Label/>
        </ModelProvider>
    );
};

// eslint-disable-next-line no-unused-vars
export const getServerData = async ({
    url,
    query,
    params
}) => {
    const res = await fetch('https://random-data-api.com/api/stripe/random_stripe');
    const data = await res.json();

    return {
        props: {
            content: data,
        },
    };
};

