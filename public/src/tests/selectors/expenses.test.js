import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [
   {
     id :'1',
     description : 'Rent',
     note:'',
     amount: 12,
     createdAt: moment(0)
   },
   {
    id :'2',
    description : 'Gas',
    note:'',
    amount: 6,
    createdAt: moment(0).subtract(4,'days').valueOf()
   },
   {
    id :'3',
    description : 'Leundry',
    note:'',
    amount: 18,
    createdAt: moment(0).add(4,'days').valueOf()
   }];

   test('testing the VisibleExpenses',()=>{
       const filters={
           text : 'e',
           sortBy : 'date',
           startDate : undefined,
           endDate : undefined
       };
       const action = selectExpenses(expenses,filters);
       expect(action).toEqual([
           expenses[2],
           expenses[0]
       ]);
   });
   test('testing the VisibleExpenses by amount',()=>{
    const filters={
        text : 'e',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    };
    const action = selectExpenses(expenses,filters);
    expect(action).toEqual([
        expenses[2],
        expenses[0]
    ]);
});
test('testing the VisibleExpenses',()=>{
    const filters={
        text : 'e',
        sortBy : 'date',
        startDate : moment(0),
        endDate : undefined
    };
    const action = selectExpenses(expenses,filters);
    expect(action).toEqual([
        expenses[2],
        expenses[0]
    ]);
});
test('testing the VisibleExpenses',()=>{
    const filters={
        text : 'e',
        sortBy : 'date',
        startDate : moment(0),
        endDate : moment(0).add(3,'days')
    };
    const action = selectExpenses(expenses,filters);
    expect(action).toEqual([
        expenses[0]
    ]);
});
test('testing the VisibleExpenses',()=>{
    const filters={
        text : '',
        sortBy : 'date',
        startDate : moment(0).subtract(5,'days'),
        endDate : moment(0).add(5,'days')
    };
    const action = selectExpenses(expenses,filters);
    expect(action).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ]);
});