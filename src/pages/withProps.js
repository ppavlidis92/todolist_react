import { useDispatch, useSelector } from 'react-redux';

const withProps = (selectors, actions) => (Component) => (props) => {
    const dispatch = useDispatch();
    const boundActions = Object.keys(actions)
        .reduce((acc, key) => {
            acc[key] = (...args) => dispatch(actions[key](...args));
            return acc;
        }, {});

    const selectedProps = useSelector((state) => {
        const selected = {};
        Object.keys(selectors)
            .forEach((key) => {
                selected[key] = selectors[key](state);
            });
        return selected;
    });
    return <Component {...props} {...selectedProps} {...boundActions} />;
};

export default withProps
