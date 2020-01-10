import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(()=>{
    const states = store.getState();
    const visibleExpenses = getVisibleExpenses(states.expenses,states.filters);
    console.log(visibleExpenses);
})

// addExpense -> Water Bill
// addExpense -> Gas Bill
// setTextFilter -> bill
// getVisibleExpenses  -> print Visible ones to screen

store.dispatch(addExpense({description : 'Water Bill', amount : 20000, createdAt : 0 }));
store.dispatch(addExpense({description : 'Electricity Bill', amount : 10000, createdAt : 2 }));
store.dispatch(addExpense({description : 'Gas Bill', amount : 50000, createdAt : 1 }));
// store.dispatch(setTextFilter('bill'));

// setTimeout(()=>{
//  store.dispatch(setTextFilter('bill'));
// },3000);
const jsx = (
    
    <Provider store = {store}>
    <AppRouter />
    </Provider>
    
);
ReactDOM.render(jsx, document.getElementById('app'));





















//ReactDOM.render(<AppRouter />, document.getElementById('app'));


// const Layout = (props)=> {
//     return (
//         <div>
//         <p>header</p>
//         {props.children}
//         <p>Footer</p>
//         </div>
//     );
// };

// const Layout = (props)=> {
//     return (
//         <div>
//         <p>header</p>
//         {props.children}
//         <p>Footer</p>
//         </div>
//     );
// };


//ReactDOM.render(<h1>This is Expensify App</h1>, document.getElementById('app'));
// ReactDOM.render ( (
//     <Layout>
//     <p>This is inline </p>
//     </Layout>
//     ),document.getElementById('app'));

// class OldSyntax {
//     constructor(){
//         this.name = 'MIke';
//     }
// }


// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// class NewSyntax {

// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);

// IndecisionApp.defaultProps = {
//     options : ['Akhil','Singh']
// }



// class Header extends React.Component {
//  //react components require one method to be defined i.e render
//  render(){
//      console.log(this.props.title);
//      return (
//          <div>
//          <h1>{this.props.title}</h1>
//          <h2>{this.props.subtitle}</h2>
//          </div>
//      );
//     }
// }



// class Action extends React.Component{
//     render(){
//          return (<div>
//         <button
//         onClick = {this.props.handlePick}
//         disabled = {!this.props.hasOptions}
//         >What Should I do ></button>
//         </div>);
//     }
// }



// class Options extends React.Component{
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {this.props.options.map((option)=> <Option key = {option} optionText = {option}/>)}
//             <p>Number of Options {this.props.options.length}</p>
//             <Option />

//             </div>
//         );
//     }
// }

//Option component here

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//             <p>{this.props.optionText}</p>
//             </div>
//         )
//     }
// }



// const jsx = (
//     <div>
//     <h1>Title</h1>
//     <IndecisionApp />
//     </div>
// )

//ReactDOM.render(jsx, document.getElementById('app'));
