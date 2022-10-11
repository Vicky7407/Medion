import React from "react";
import { Route } from 'react-router-dom';
import { isLogin } from '../Utility';

function Privateroute({component:Component , ...rest}) {
    console.log(isLogin());
    return (
        <Route {...rest} render = {props =>(
            isLogin(true)?
            <Component {...props} />
            :
            <Route to={"/Home"}/>
        )}
        />
    );
}

export default Privateroute;