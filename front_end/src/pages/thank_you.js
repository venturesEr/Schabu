import React from 'react';
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/index";
import '../css/candidate.css'

class Thank_you extends React.Component{
    render(){
        return(
            <>
            <NavBar/>
            <div className="m-l-100">
            <h2 className="m-t-100 m-l-24">Thank you for your registeration!. </h2>
            <h3 className="m-l-60 m-t-40">Your details are recorded</h3>
            </div>
            <Footer></Footer>
            </>
        )
    }
}

export default Thank_you;