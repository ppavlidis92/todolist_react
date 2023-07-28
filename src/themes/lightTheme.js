import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
        error: {
            main: '#ffd700',
        },
    },
});

export default lightTheme;
