//Higher order component - A component (HOC) that renders other component
// Reuse Code
// Render Hijacking
// prop Manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props) =>(
<div>
<h1>INFO</h1>
<p>This is Info : {props.info}</p>
</div>
);

const WithAdminWarning = (WrappedComponent) => {                    //This is High Order Component as it comtains composite components.....
    return (props) =>(<div>                                                      
    {props.isAdmin && <p>This is private info. Please don't Share!</p>}
    <WrappedComponent {...props} />
    </div>);
};
const requireAuthentication = (WrappedComponent)=> {                //This is High Order Component as it comtains composite components.....
    return (props) => (
        <div>
        {props.isAuthenticated ? (
            <div>
            <p>Access Granted</p>
            </div>
        ) : (<div>
            Please Login to view to view the info
            </div>)}
        <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin ={true} info="This IS Akhil" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated ={false} info="This need the user to be login" />,document.getElementById('app'));

