import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize'


// const now = moment();
// console.log(now.format(' Do, YYYY'));


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt : props.expense ?  moment(props.expense.createdAt): moment(),
            calenderFocused : false,
            error :''
    
        };
    }

    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
    };
    onNoteChange=(e)=> {
       // const note = e.target.value;
        //if you coment the above line , there will be errors as target value can't be directly used in callbacks, it should be saved somewhere first
        e.persist();
        this.setState(()=>({note :e.target.value}))
    };
    onChangeAmount=(e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }

    }
    onDateChange =(createdAt)=>{
        this.setState(()=>({createdAt}))
    };
    onFocusChange=({focused})=>{
        this.setState(()=>({calenderFocused: focused}))
    };
    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            //Set the error message to "Please provide valid messages" 
            this.setState(()=>({error : 'Please provide valid values for description and amount'}))
        }else{
            //clear the error 
            this.setState(()=>({error : ''}))
            //console.log("Submitted");
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount,10) * 100  ,//to convet decimal digits into cents , multiply by 100
                createdAt : this.state.createdAt.valueOf(),
                note : this.state.note
            })
        }
    }

    render(){
        return (
            <div>
              <form onSubmit={this.onSubmit}>
              {this.state.error && <p>{this.state.error}</p>}
              <input
               type="text"
               placeholder="Description"
               autoFocus
               value={this.state.description}
               onChange={this.onDescriptionChange}
               />
              
              <input 
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onChangeAmount}
              />
              <SingleDatePicker 
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={()=>false}
              />

              <textarea
              placeholder="Add notes here for expense(optionl)"
              value = {this.state.note}
              onChange = {this.onNoteChange} >
              </textarea>
              <button >Add Expense</button>
              </form>
            </div>
        );

    }
}