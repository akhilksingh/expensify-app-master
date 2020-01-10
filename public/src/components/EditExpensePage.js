import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editExpense,removeExpense} from '../actions/expenses';




//EDITING THE EXPENSE with ID {props.match.params.id}
export class EditExpensePage extends React.Component {
    onSubmit = (expense)=>{
        //console.log('updated',expense);
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    }
    removeExpense = ()=>{
        this.props.removeExpense({id : this.props.expense.id});
        this.props.history.push('/');
    }
    render(){
        return (<div>
            <ExpenseForm 
            expense = {this.props.expense}
            onSubmit = {this.onSubmit}
            />
            <button 
            onClick={this.removeExpense}
            >Remove</button>
        </div>);
    }
    
}


const mapStateToProps=(state,props)=>{
    
    return {
        expense : state.expenses.find((expense)=> expense.id === props.match.params.id)
    };
};
const mapDispatchToProps = (dispatch,props)=>{
    return {
        editExpense : (id,expense)=>(dispatch(editExpense(id,expense))),
        removeExpense: (id)=>(dispatch(removeExpense({id : id.id})))
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)