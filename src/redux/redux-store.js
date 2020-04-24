import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navigationReducer from './navigationReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navigation: navigationReducer,
});

let store = createStore(reducers);

export default store;