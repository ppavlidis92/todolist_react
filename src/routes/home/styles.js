import { css } from '@emotion/react';

const styles = ({
    container: (theme) => css({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
    }),
    logo: (theme) => css({
        marginBottom: theme.spacing(6),
    }),
});

export default styles;
