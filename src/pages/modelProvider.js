import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import configStore from './store'
import epics from 'models/test/epics';
import reducer from 'models/test/reducer';
import { initState } from 'models/test/reducer';


const ModelProvider = ({ options, children }) => {

    const epicMiddleware = createEpicMiddleware({
        dependencies: { options },
    });

    const middleWares = [epicMiddleware];
    const store = configStore(reducer, initState, middleWares);

    epicMiddleware.run(epics);

    return <Provider store={store}>{children}</Provider>;
};

export default ModelProvider