import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import FilterReducer from '../reducers/filters';


//Store creation
export default ()=>{
    const store = createStore (
        //combineReduces takes key value pair , root state name as Key and and value as reducers
        combineReducers({
            expenses : expenseReducer,
            filters : FilterReducer
    
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    )
    return store
}
