import { combineReducers, createStore, applyMiddleware} from 'redux';
import {thunk} from "redux-thunk";
import {bucketListReducer, addGoalReducer, deleteGoalReducer} from './redux/reducers/BucketListReducer'
import {composeWithDevTools} from '@redux-devtools/extension'


const reducer = combineReducers({
        bucketLists: bucketListReducer,
        addGoal: addGoalReducer,
        deleteGoal: deleteGoalReducer
})


//const persistedReducer = persistReducer(persistConfig, reducer)

const middleware = [thunk];

const store = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
)
//const persistor = persistStore(store);

export {store};