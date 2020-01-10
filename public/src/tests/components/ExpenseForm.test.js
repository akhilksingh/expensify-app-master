import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from '../__mocks__/moment';

test('Should Render ExpenseForm correctly',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

//Should render expense form with expense data

test('Should Render ExpenseForm correctly with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});
//Should render error if no expense data is set
test('Should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault : ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change',()=>{
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value);

});
test('Should set Note on input change',()=>{
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        persist: ()=>{},
        target : {value}
    });
    expect(wrapper.state('note')).toBe(value);

});
test('Should set Amount on input change',()=>{
    const value = '1234.34';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        
        target : {value}
    });
    expect(wrapper.state('amount')).toBe(value);

});

//Using Test Spies
test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault : ()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[1].description,
        amount : expenses[1].amount,
        createdAt : expenses[1].createdAt,
        note : expenses[1].note
    });

});


test('should set new date',()=>{
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set Calender focus',()=>{
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toBe(focused);
});