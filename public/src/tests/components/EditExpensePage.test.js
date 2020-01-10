import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import moment from 'moment';

let editExpense , removeExpense, history ,wrapper,onSubmit;
beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push:jest.fn()};
    onSubmit = jest.fn();
    wrapper = shallow(<EditExpensePage 
        expense = {expenses[1]} 
        onSubmit={onSubmit}
        editExpense={editExpense}
        removeExpense={removeExpense}
        history ={history}
        />);
})
test('Should render Edit expense Page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Should handle remove expense',()=>{
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle edit expense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

