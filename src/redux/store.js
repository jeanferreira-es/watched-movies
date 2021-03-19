import { createStore, combineReducers } from 'redux';
import counterReducer from '../redux/reducers/counterReducer';
import themeReducer from '../redux/reducers/themeReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
});

export default createStore(rootReducer);