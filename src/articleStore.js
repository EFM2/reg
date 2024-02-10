import { legacy_createStore } from 'redux';
import articleReducer from './reducers/articleReducer';

const articleStore = legacy_createStore(articleReducer)
export default articleStore;