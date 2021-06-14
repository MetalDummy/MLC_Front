//Template del Store. Se incluye el middleware Thunk para permitir llamadas Asincronas.

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/indexReducer.jsx";
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;