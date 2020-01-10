import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('Should setup remove Expense Object',()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense Object',()=>{
    const action = editExpense('123abc',{ description: 'Hey ! I am Back :)'});
    expect(action).toEqual({
        type :'EDIT_EXPENSE', 
        id: '123abc',
        updates : { description: 'Hey ! I am Back :)'}
    });
});

test('Should setup Add expense Object with empty Object',()=>{
    const action = addExpense({});
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            id: expect.any(String),
            note : '',
            description :'',
            amount : 0,
            createdAt : 0
        }
    });

});
test('Should setup Add expense Object with empty Object',()=>{
    const expenseData = {note:'this is note',description :'This is description',amount:25,createdAt:1234};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            id: expect.any(String),
            ...expenseData
        }
    });

});


