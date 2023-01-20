import { applyMiddleware, legacy_createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { capsuleReducer } from "./Capsule/capsule.reducer";
import { rocketReducer } from "./Rocket/rocket.reducer";


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    capsule: capsuleReducer,
    rocket: rocketReducer
})


export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
)