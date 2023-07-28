import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children, ...rest }) => (
    <Route
        {...rest}
        render={({ location }) => (isAuthenticated ? (
            children
        ) : (
            <Navigate
                to={{
                    pathname: '/login',
                    state: { from: location },
                }}
            />
        ))}
    />
);

export default PrivateRoute;
