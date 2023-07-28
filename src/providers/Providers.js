import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

import { models } from 'models';
import Snackbar from 'components/Snackbar';
import { ModelProvider } from '@blue-functor/system';

const Providers = ({
    options,
    initialState,
    theme,
    maxNotifications,
    children,
}) => (
    <ModelProvider
        options={options}
        initialState={initialState}
        model={models}
    >
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={maxNotifications}>
                    <Snackbar />
                </SnackbarProvider>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    </ModelProvider>
);

export default Providers;
