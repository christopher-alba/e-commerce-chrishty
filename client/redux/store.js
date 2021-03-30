import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./reducers";
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const envr =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, envr);

export default store;
