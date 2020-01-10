import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('Should setup default filter values',()=>{
    const state = filterReducer(undefined,{type: '@@INIT' });
    expect(state).toEqual({
        text :'',
        sortBy: 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    });
});

test('Should setup default filter values',()=>{
    const currentState =  {
        text : '',
        sortBy : 'date', // date or amount
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const action = {type : 'SORT_BY_DATE'}
    const state = filterReducer(currentState,action);
    expect(state).toEqual({
        ...currentState,
        sortBy : 'date'
    });
});

test('Should setup default filter values',()=>{
    const currentState =  {
        text : '',
        sortBy : 'date', // date or amount
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const action = {type : 'SORT_BY_AMOUNT'}
    const state = filterReducer(currentState,action);
    expect(state).toEqual({
        ...currentState,
        sortBy : 'amount'
    });
});

test('Should setup default filter values',()=>{
    const currentState =  {
        text : '',
        sortBy : 'date', // date or amount
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const action = {
        type : 'SET_START_DATE',
        date : moment().startOf('month').add(2,'days')
    }
    const state = filterReducer(currentState,action);
    expect(state).toEqual({
        ...currentState,
        startDate : action.date
    });
});

test('Should setup default filter values',()=>{
    const currentState =  {
        text : '',
        sortBy : 'date', // date or amount
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const action = {
        type : 'SET_END_DATE',
        date : moment().endOf('month').subtract(2,'days')
    }
    const state = filterReducer(currentState,action);
    expect(state).toEqual({
        ...currentState,
        endDate : action.date
    });
});
test('Should setup default filter values',()=>{
    const currentState =  {
        text : '',
        sortBy : 'date', // date or amount
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const action = {
        type : 'SET_TEXT_FILTER',
        text : 'akhil'
        
    }
    const state = filterReducer(currentState,action);
    expect(state).toEqual({
        ...currentState,
        text : action.text
    });
});

