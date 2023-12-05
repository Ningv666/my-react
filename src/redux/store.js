// 引入createStore,专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from 'redux';
// 引入为count组件服务的countReducer
import countReducer from './reducers/count';
// 引入为person组件服务的personReducer
import personReducer from './reducers/person';
// 引入chunk，用于支持异步action
import thunk from 'redux-thunk';

// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// 汇总所有的reducer变成一个总的reducer
const allReducer = combineReducers({
    count: countReducer,
    persons: personReducer
})
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))