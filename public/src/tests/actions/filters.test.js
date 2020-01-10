import moment from 'moment';
import {setStartDate,setEndDate,sortByAmount,sortByDate,setTextFilter} from '../../actions/filters';

//Filters


test('Should setup setTextFilter',()=>{
    const textFilter = 'rest';
    const action = setTextFilter(textFilter);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: textFilter
    });
});
test('Should setup setStartDate',()=>{
    const startDate = moment(0);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: startDate
    });
});
test('Should setup setEndDate',()=>{
    const endDate = moment(0);
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: endDate
    });
});

test('Should setup sortByDate',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should setup sortByAmount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

