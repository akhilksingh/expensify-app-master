import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './TestingComponentForConnect';


//Action Generator
const incrementCount = ({ incrementBy=1 }={})=>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1}={})=>({
    type: 'DECREMENT',
    decrementBy

});
const setCount = ({count = 10}={})=>({
    type : 'SET',
    count

});
const resetCount = ()=>({
    type : 'RESET',
});


//
const countReducer = (state = { count : 10 },action)=>{
    //console.log("Running");

    switch(action.type){
        case 'INCREMENT':
        console.log(action.incrementBy);
         return {
            count : state.count + parseInt(action.incrementBy)
        };
        case 'DECREMENT':
        return {
            count : state.count - action.decrementBy
        };
        case 'SET':
        return {
            count : action.count
        }
        case 'RESET':
        return {
            count : 0
        }
        default :
        return state;
    }
};

// the first arg to createStore is the current state
const store = createStore(countReducer);
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({
    type : 'INCREMENT',
    incrementBy : 5
});

store.dispatch({
    type : 'INCREMENT'
});

const jsx = (
    <Provider store ={store}>
    <App />
    </Provider>
    
);
ReactDOM.render(jsx, document.getElementById('app'));







