import React from 'react';
import { connect } from 'react-redux';
import SelectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseTotal = ({expenseCount,expenseTotal}) => {
    const formattedExpense = numeral(expenseTotal/100).format('$0,0.00');
    return (
        <div>
        {
            expenseCount === 0 ? (<p></p>) : 
            (
                <h2>
                <p> Viewing {expenseCount} Number of expense with total {formattedExpense} </p>
                </h2>
            )
        }
        </div>
    );
    

};
// //connect returns some High order component function which has access to Redux store
// // we pass what we want to connect in store , we have lot of information in store like state ,expenses, filters
const mapStateToStore = (state)=>
{
    const expenses = SelectExpenses(state.expenses,state.filters);
    const expenseTotal = expenses.reduce(
        (accumulator,currentValue)=>accumulator+currentValue.amount
        ,0
    );
    return {
        expenseCount : expenses.length,
        expenseTotal 
    };
};
export default connect(mapStateToStore)(ExpenseTotal);  //HOC

//const ConnectedExpenseList = connect()(ExpenseList);