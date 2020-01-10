import React from 'react';
import {AddExpensePage} from '../../components/AddExpensePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

let onSubmit,history,wrapper,addExpense;
beforeEach(()=>{
    addExpense = jest.fn();
    onSubmit = jest.fn();
    history = {push:jest.fn()};
    wrapper = shallow(<AddExpensePage 
        onSubmit={onSubmit} 
        history={history}
        addExpense={addExpense} />);
})
test('should render Add expense page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);

});