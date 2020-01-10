import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    
    {
        props.expenses.length === 0 ? (
            <p> No Expenses </p>
        ) : 
        (
                props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense} />
            })
            
        )
    }
    </div>

);
// //connect returns some High order component function which has access to Redux store
// // we pass what we want to connect in store , we have lot of information in store like state ,expenses, filters
const mapStateToStore = (state)=>
{
    return {
       expenses : SelectExpenses(state.expenses,state.filters)
    };
};
export default connect(mapStateToStore)(ExpenseList);  //HOC

const ConnectedExpenseList = connect()(ExpenseList);

//  export default ConnectedExpenseList;

 
// const App = (props) =>(
//     <div>
//     <p>Testing Connect Method</p>
//     {props.name}
//     </div>
// )
// const ConnectedExpenseList = connect((state)=>
// {
//     return {
//         name : 'Andrew'
//     }
// })(App);

// export default ConnectedExpenseList;