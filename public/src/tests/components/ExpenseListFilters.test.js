import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altfilters} from '../fixtures/filters';
import moment from 'moment';

let setStartDate ,setEndDate ,setTextFilter,sortByDate,sortByAmount , wrapper;
beforeEach(()=>{
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        setStartDate={setStartDate}
        setEndDate= {setEndDate}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        filters={filters}/> );
});

test('Should render ExpenselistFilters Snapshot',()=>{
    expect(wrapper).toMatchSnapshot();
});
test('Should render ExpenselistFilters Snapshot',()=>{
    wrapper.setProps({
        filters : altfilters
    });
    expect(wrapper).toMatchSnapshot();
});

//here you need to set props for component by using setprops on wrapper........

test('Should test the Text Filter',()=>{
    const value = 'Akhil';
    wrapper.find('input').simulate('change',{
        target : {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);

});
test('Should test the sortBy Date',()=>{
    const value = 'date';
    wrapper.find('select').simulate('change',{
        target : {value}
    });
    expect(sortByDate).toHaveBeenLastCalledWith();

});
test('Should test the sortBy Amount',()=>{
    const value = 'amount';
    wrapper.find('select').simulate('change',{
        target : {value}
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();

});
test('Should test the DatePicker Props',()=>{
    const startDate = moment(0);
    const endDate = moment(0).add(6,'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('Should test the DatePicker Props',()=>{
    const calenderFocussed = true;
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calenderFocussed);
    expect(wrapper.state('calendarFocussed')).toBe(true);
});
