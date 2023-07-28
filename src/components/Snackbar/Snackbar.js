// useSnackbar needs React in scope
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

import { useSnackbar } from 'notistack';
import { Button } from '@mui/material';
import { withProps } from '@blue-functor/system';

import { snackbar } from 'models/ui';

const Snackbar = ({ snackbar }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        const element = snackbar.slice()[0];
        element && enqueueSnackbar(element.message, {
            variant: element.type,
            action: (key) => (
                <>
                    <Button size="small" onClick={() => closeSnackbar(key)}>
                        Dismiss
                    </Button>
                </>
            ),
        });
    }, [snackbar]);

    return null;
};

export default withProps({
    snackbar,
})(Snackbar);
