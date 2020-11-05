import React from 'react';
import { NavLink } from 'react-router-dom';
import history from './history'

class Welcome extends React.Component{

    render(){
        return(
            <div className="welcome">
                <h1>Welcome Pranav</h1>
                <h1>Click the link below to start the interview for Web Developer position</h1>
                <NavLink className="nav-link " onClick={()=> history.push('/candidate')} to="/candidate">Start the interview</NavLink>
            </div>
        )
    }
        
    
}

export default Welcome;