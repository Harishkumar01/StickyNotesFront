import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import {signout,isAuthenticated} from '../auth';

const isActive = (history,path) => {
    if(history.location.pathname === path) return {color: "#ff9900"}
    else return {color: "#ffffff"}
}


const Menu = ({history}) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link className = "nav-link"  style = {isActive(history,"/")} to = "/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className = "nav-link"  style = {isActive(history,"/users")} to = "/users">Users</Link>
            </li>
            
            {!isAuthenticated() && (
                <>
                    <li className="nav-item">  
                        <Link  className = "nav-link" style = {isActive(history,`/post/create`)} to = {`/post/create`}> 
                            create Post
                        </Link> 
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link" style = {isActive(history,"/signup")} to = "/signup">Sign Up</Link>  
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link" style = {isActive(history,"/signin")} to = "/signin">Sign In</Link> 
                    </li>
                </>
            )}


            {isAuthenticated() && (
                <> 
                    <li className="nav-item">
                        <span className = "nav-link" style = {(isActive(history,"/signout"),
                        {cursor: "pointer",color: "#ffffff"})}
                        onClick={() => signout(()=> history.push('/'))}>Sign Out
                        </span> 
                    </li>
    
                </>
            )}
            
            
        </ul>
    </div>
)

export default withRouter(Menu);