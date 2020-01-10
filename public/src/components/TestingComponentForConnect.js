import React from 'react';
import { connect } from 'react-redux';


const App = (props) =>(
    <div>
    <p>Testing Connect Method</p>
    {props.name}
    </div>
)
const ConnectedExpenseList = connect((state)=>
{
    return {
        name : 'Andrew'
    }
})(App);

export default ConnectedExpenseList;

