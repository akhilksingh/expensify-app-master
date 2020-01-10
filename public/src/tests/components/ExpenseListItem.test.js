import React from 'react';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import {shallow} from 'enzyme';
import moment from 'moment';


test('Should render Expense List Item',()=>{
    const expense = {
        id :'1',
        description : 'Rent',
        note:'',
        amount: 12,
        createdAt: moment(0)
      };
    const wrapper = shallow(<ExpenseListItem {...expense}/>);
    expect(wrapper).toMatchSnapshot();

});