import React from 'react';
import { BrowserRouter, Route ,Switch,Link,NavLink} from 'react-router-dom';
const Header = ()=>(
    <div>
    <h1>Expensify</h1>
    <h2>
    <NavLink to="/" activeClassName="is-active" exact="true">DashBoard </NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
    </h2>
    </div>
);

export default Header;