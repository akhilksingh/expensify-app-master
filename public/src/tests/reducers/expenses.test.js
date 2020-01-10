import expenseReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should set up default expense reducer',()=>{
    const expense = {
      id :'4',
      description : 'House',
      note:'',
      amount: 15,
      createdAt: moment(0)
    };
    const action = {
        type : 'ADD_EXPENSE',
        expense: expense
    };
    const state = expenseReducer(expenses,action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
});
test('Should set up default expense reducer',()=>{
    const expense = {
      id :'3',
      description : 'House',
      note:'',
      amount: 15,
      createdAt: moment(0)
    };
    const action = {
        type : 'REMOVE_EXPENSE',
        id: expense.id
    };
    const state = expenseReducer(expenses,action);
    expect(state).toEqual([
        expenses[0],
        expenses[1]
    ]);
});
//negative test case of RemoveExpense
test('Should set up default expense reducer',()=>{
    const expense = {
      id :'9',
      description : 'House',
      note:'',
      amount: 15,
      createdAt: moment(0)
    };
    const action = {
        type : 'REMOVE_EXPENSE',
        id: expense.id
    };
    const state = expenseReducer(expenses,action);
    expect(state).toEqual([
        ...expenses
    ]);
});

test('Should set up default expense reducer',()=>{
    const expense = {
      id :'2',
      description : 'Home',
      note:'',
      amount: 15,
      createdAt: moment(0)
    };
    const action = {
        type : 'EDIT_EXPENSE',
        id: expense.id,
        updates : {
             description : expense.description,
             description : 'Home',
             note:'',
             amount: 15,
             createdAt: moment(0)
        }
    };
    const state = expenseReducer(expenses,action);
    expect(state).toEqual([
        expenses[0],
        expense,
        expenses[2]
    ]);
});

//Negative test case for edit expense
test('Should set up default expense reducer',()=>{
    const expense = {
      id :'10',
      description : 'Home',
      note:'',
      amount: 15,
      createdAt: moment(0)
    };
    const action = {
        type : 'EDIT_EXPENSE',
        id: expense.id,
        updates : {
             description : expense.description,
             description : 'Home',
             note:'',
             amount: 15,
             createdAt: moment(0)
        }
    };
    const state = expenseReducer(expenses,action);
    expect(state).toEqual([
        ...expenses
    ]);
});