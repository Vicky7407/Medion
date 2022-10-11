import React from "react";
import { Redirect,Route  } from "react-router-dom";
import { isLogin } from "../Utility";


function Publicroute({component:Component,restricted =false, ...rest}) {
    console.log(isLogin());
    return (
        <Route {...rest} render={props =>(
            isLogin() && restricted ?
            <Redirect to={"/Home"} />
            :
            <Component {...props}/>

        )}
         />
    );
}

export default Publicroute;       