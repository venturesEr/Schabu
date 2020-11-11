import React from 'react';
import { NavLink } from 'react-router-dom';
import history from '../history'

class Welcome extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        let name = (this.props.location.search)
        name = name.split("=")[1];
        let h1 = "/candidate?name="+name;
        return(
            <div className="welcome">
                <h1>Welcome, {name}</h1>
                <NavLink className="nav-link " onClick={()=> history.push('/candidate')} to={h1}>Click me to go the candiate page</NavLink>
            </div>
        )
    }
        
    
}

export default Welcome;