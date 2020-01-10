import {createStore} from 'redux';


//destructing object sent as  
// const add = ({a,b})=>{
//     return a+b;
// }
// console.log(add({a:1,b:12}));



//Action Generators - the function which return action object.(usually Arrow functions)
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
//prefer Action Generators over Inline Action


//Example of not a pure function
//let a=10;
//const add = (b) =>{ return a+b; };
//as output depends on 'a' , so its not a pure function , we don't want to change variable outside scope and we don't want to rely on outside scope variable



console.log("in Redux ");


//Reducers
//1. Reducers are pure function , Pure function means output is completely determined by input , state and action  define the output of Reducer
//2. Never change state or action., we take action and state and return a new state
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

//console.log(store.getState());

//Actions - object that gets sent to the store

//action's like walk, stop_walking , sit , work , start_walking 

//increment , decrement , reset


//watching redux store for changes
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

// store.dispatch({
//     type : 'INCREMENT',
//     incrementBy : 5
// });

// store.dispatch({
//     type : 'INCREMENT'
// });
store.dispatch(incrementCount({incrementBy : 15}));

//unsubscribe();



// store.dispatch({
//     type : 'DECREMENT',
//     decrementBy : 5
// });
// store.dispatch({
//     type : 'DECREMENT'
// });
store.dispatch(decrementCount({decrementBy : 2}));
store.dispatch(decrementCount({decrementBy : 2}));
store.dispatch(decrementCount({decrementBy : 2}));

store.dispatch(resetCount());

store.dispatch(setCount({count : 110}));

//Increment the count


//reset the count to zero

//console.log(store.getState());


