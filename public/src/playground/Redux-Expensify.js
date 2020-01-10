import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
















store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})


const expenseOne = store.dispatch(addExpense({description : 'Rent', amount : 300, createdAt : 2 }));
const expenseTwo = store.dispatch(addExpense({description : 'Rent', amount : 100,createdAt : 40 }));
const expenseThree = store.dispatch(addExpense({description : 'Rent', amount : 330, createdAt : 25 }));
const expenseFour = store.dispatch(addExpense({description : 'Rent', amount : 50,createdAt : 60 }));
const expenseFive = store.dispatch(addExpense({description : 'Rent', amount : 30, createdAt : 89 }));
const expenseSix = store.dispatch(addExpense({description : 'Rent', amount : 1000,createdAt : 3 }));
// //store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount : 500}));
store.dispatch(setTextFilter('Rent'));
//store.dispatch(sortByAmount());
 store.dispatch(sortByDate());
 store.dispatch(setStartDate(1));     //TimeStamps what are TimeStamps
 store.dispatch(setEndDate(100));       


const demoState = {
    Expenses : [{
        id:'Akhil',
        description : 'january Rent',
        note: 'This was the final payment for January ',
        amount : 53555,
        createdAt : 0
    }],
    filters : {
        text : 'rent',
        sortBy : 'amount', // date or amount
        startDate : undefined,
        endDate : undefined
    }
};