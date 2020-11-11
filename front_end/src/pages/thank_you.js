import React from 'react';
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/index";
import '../css/candidate.css'
import bg from '../Assets/Schabu-Pic.jpg';

class Thank_you extends React.Component{
    render(){
        return(
            <>
            <div className="thankyou">
            <NavBar/>
            <div style={{backgroundImage:`url(${bg})`,width:'100%', height:'100%', filter: 'blur(1px)', magin:'0px', backgroundSize:'cover', position:'absolute',
            backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
            </div>
            <div className="Login m-l-100" style={{position:'relative', height:'760px'}}>
                <div style={{ paddingLeft:'20px',paddingTop:'40px', marginTop:'200px', color:'white', marginLeft:'100px', marginRight:'100px',height:'200px', backgroundColor:'rgba(255, 255, 255, .15)', backdropFilter:'blur(100px)',  borderRadius:'25px'}}>
                <h1 className=" m-l-20" style={{position:'relative'}}>Thank you for your application</h1>
                <div className="container-fluid m-t-30">
                    <h5 className="m-l-14 m-b-24">An email will be sent to you soon!</h5>
                    <div className="row m-l-30">
                        <div className="row cust_row">
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
            </div>
            </>
        )
    }
}

export default Thank_you;