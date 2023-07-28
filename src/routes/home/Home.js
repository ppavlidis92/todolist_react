import { useCallback } from 'react';
import { compose } from 'redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { withProps, withServerContent } from '@blue-functor/system';
import logo from 'assets/logo/whiteLogo.svg';

import { openSnackbar } from 'models/ui';

import styles from './styles';

const callbackify = (fn, ...args) => useCallback(() => fn(...args), args);

const Home = ({ openSnackbar, content }) => {
    console.log(content);
    return (
        <div css={styles.container}>
            <img css={styles.logo} src={logo} alt="Blue Functor Logo" />
            <Typography variant="h2">Welcome to the Blue Functor Template</Typography>
            <Typography variant="body1">
                Edit&nbsp;
                <strong>&apos;/src/routes/home/Home.js&apos;</strong>
                &nbsp;to get started.
            </Typography>
            <Button
                variant="contained"
                color="error"
                onClick={callbackify(openSnackbar, {
                    message: 'This is a test notification',
                    type: 'success',
                })}
            >
                Test Notifications
            </Button>
        </div>
    );
};

export default compose(
    withProps({}, { openSnackbar }),
    withServerContent(),
)(Home);
