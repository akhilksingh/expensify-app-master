import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseTotal} from '../../components/Expense-total';
import fixtures from '../fixtures/expenses';

test('Should test Expense Total correctly',()=>{
    const wrapper = shallow(<ExpenseTotal expenseCount={1} expenseTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should test Expense Total correctly',()=>{
    const wrapper = shallow(<ExpenseTotal expenseCount={23} expenseTotal={23544335} />);
    expect(wrapper).toMatchSnapshot();
});