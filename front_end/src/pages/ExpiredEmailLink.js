import React from 'react'
import bg from '../Assets/Schabu-Pic.jpg';
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/index";

class ExpiredEmailLink extends React.Component{
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
                <h1 className=" m-l-20" style={{position:'relative'}}>404 Page not Found</h1>
                <div className="container-fluid m-t-30">
                    <h5 className="m-l-14 m-b-24">Maybe the link that you are trying to access is no longer valid or does not exist</h5>
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

export default ExpiredEmailLink;