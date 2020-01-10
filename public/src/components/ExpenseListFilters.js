import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';
import {sortByDate,setStartDate,setEndDate} from '../actions/filters';
import {sortByAmount} from '../actions/filters';
import {DateRangePicker} from 'react-dates';


//Here we are going to implement the filters with Text input ,here we need to update the store , so guess what we need , STORE , to connect to store , we need connect() 
// connect returns a function which takes component as a parameter, connect takes a function as argument that determines what infomation of the store we want component to access , this function takes "store state" as first argument. 


//when you connect a component with redux , you get some other information as well i.e dispatch , here we have access to dispatch also which can dispatch actions to redux store
export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocussed : null
    };
    onDatesChange = ({startDate,endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocussed)=>{
        this.setState(()=>({calendarFocussed}));
    };
    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value);
        //console.log(e.target.value);
    };
    onSortChange = (e)=>{
                
        if(e.target.value==='date'){
            this.props.sortByDate();
        }
        else if(e.target.value==='amount'){
            this.props.sortByAmount();
        }
    };

    render(){
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
            <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
             startDate = {this.props.filters.startDate}
             endDate = {this.props.filters.endDate}
             onDatesChange = {this.onDatesChange}
             focusedInput = {this.state.calendarFocussed}
             onFocusChange = {this.onFocusChange}
             showClearDates={true}
             numberOfMonths={1}
             isOutsideRange={()=>false}

             />
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {
        filters : state.filters
    }

}
const mapDispathToProps = (dispatch)=>{
    return {
        setStartDate : (date)=>{dispatch(setStartDate(date))},
        setEndDate : (date)=>{dispatch(setEndDate(date))},
        setTextFilter: (text)=>{dispatch(setTextFilter(text))},
        sortByDate:()=>{dispatch(sortByDate())},
        sortByAmount:()=>{dispatch(sortByAmount())}
    };
}

export default connect(mapStateToProps,mapDispathToProps)(ExpenseListFilters);

