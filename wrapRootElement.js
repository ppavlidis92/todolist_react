import CssBaseline from '@mui/material/CssBaseline';
import Providers from './src/providers';
import { lightTheme } from './src/themes';

export const wrapRootElement = ({ element }) => (
    <div>
        <CssBaseline />
        {element}
    </div>
);
