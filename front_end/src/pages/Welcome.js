import React from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from "../components/Carousel/index";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/index";
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
                <NavBar></NavBar>
                <Carousel>  
                </Carousel>
                <div className="m-t-30">
                <h1 className="m-l-100">Welcome, {name}</h1>
                <NavLink className=" m-l-100" onClick={()=> history.push('/candidate')} to={h1}>Click me to go the candiate page</NavLink>
                </div>
                <Footer/>                
            </div>
        )
    }
        
    
}

export default Welcome;