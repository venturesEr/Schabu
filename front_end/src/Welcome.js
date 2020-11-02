import React from 'react';
import { NavLink } from 'react-router-dom';
import history from './history'

class Welcome extends React.Component{

    render(){
        return(
            <div className="welcome">
                <h1>Welcome</h1>
                <NavLink className="nav-link " onClick={()=> history.push('/candidate')} to="/candidate">Click me to go the candiate page</NavLink>
            </div>
        )
    }
        
    
}

export default Welcome;