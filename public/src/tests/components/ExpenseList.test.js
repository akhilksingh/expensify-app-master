import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';//since we dont wantthe connected version
import expenses from  '../fixtures/expenses';

test('Should render Expense List with expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseList with empty message',()=>{
    const wrapper = shallow(<ExpenseList expenses= {[]} />);
    expect(wrapper).toMatchSnapshot();
})