import { withProps, withModelInjection } from '@blue-functor/system';
import { Router } from '@reach/router';
import { model, start } from 'models/reach-router';
import { useEffect } from 'react';
import { compose } from 'redux';
import { First, Second, Home } from './components';

const Client = ({ start }) => {
    useEffect(() => {
        start({ nikos: 'aa' });
    }, []);

    return (
        <Router basepath="/reach-router">
            <Home path="/" />
            <First path="/first" />
            <Second path="/second" />
        </Router>
    );
};

export default compose(
    withModelInjection(model),
    withProps({ start }),
)(Client);
