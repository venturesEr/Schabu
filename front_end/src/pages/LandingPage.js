import React from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from "../components/Carousel/index";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/index";
import history from '../history'

class LandingPage extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        let name = (this.props.location.search)
        name = name.split("=")[1];
        let h1 = "/job-listing";
        return(
            <div className="welcome">
                <NavBar></NavBar>
                <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel">
                 
                  <ol className="carousel-indicators">
                    <li data-target="#video-carousel-example" data-slide-to="0" className="active"></li>
                    <li data-target="#video-carousel-example" data-slide-to="1"></li>
                    <li data-target="#video-carousel-example" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="carousel-caption text-center" style={{backgroundColor:'rgba(255, 255, 255, .15)', margin:'350px', backdropFilter:'blur(100px)', borderRadius:'25px'}}>
                          <h1 className="">Welcome to Schabu</h1>
                          <h3 className="m-t-20">Find your own career</h3>
                          <a href="#detail" className="btn btn-warning btn-lg m-t-20">How it works</a>
                      </div>
                      <video style ={{width:'100%',height:'920px', objectFit:'cover'}} className="video-fluid" autoPlay loop muted>
                        <source src="https://ak.picdn.net/shutterstock/videos/10205783/preview/stock-footage--k-group-of-architects-or-engineers-working-on-renewable-energy-development-with-concept-models.webm" type="video/mp4" />
                      </video>
                    </div>
                    <div className="carousel-item">
                    <div className="carousel-caption text-center m-b-250 m-l-200 m-r-200" style={{backgroundColor:'rgba(255, 255, 255, .15)', margin:'350px', backdropFilter:'blur(100px)',  borderRadius:'25px'}}>
                    <h1 className="">Welcome to Schabu</h1>
                          <h3 className="m-t-20">Find your own career</h3>
                          <a href="#detail" className="btn btn-warning btn-lg m-t-20">How it works</a>
                      </div>
                      <video style ={{width:'100%',height:'920px', objectFit:'cover'}} className="video-fluid" autoPlay loop muted>
                        <source src="https://ak.picdn.net/shutterstock/videos/1035704162/preview/stock-footage-three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet-computer.webm" type="video/mp4" />
                      </video>
                    </div>
                    <div className="carousel-item">
                    <div className="carousel-caption text-center m-b-250" style={{backgroundColor:'rgba(255, 255, 255, .15)', margin:'350px', backdropFilter:'blur(100px)',  borderRadius:'25px'}}>
                    <h1 className="">Welcome to Schabu</h1>
                          <h3 className="m-t-20">Find your own career</h3>
                          <a href="#detail" className="btn btn-warning btn-lg m-t-20">How it works</a>
                      </div>
                      <video style ={{width:'100%',height:'920px', objectFit:'cover'}} className="video-fluid" autoPlay loop muted>
                        <source src="https://ak.picdn.net/shutterstock/videos/1032517127/preview/stock-footage-young-man-freelancer-student-using-laptop-studying-online-working-from-home-in-internet-smiling.webm" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div className="jumbotron m-t-30" id="detail">
                <div class="container">
                    <h1 class="display-4">Schabu - Beta</h1>
                    <p class="lead">Recruitment Redefined.</p>
                    <p className="lead">Schabu is a conversational voice agent that automates high volume, repetitive and time consuming tasks such as pre-interview screening, compliance data collection, candidate assessment and evaluation.</p>
                <NavLink className="" onClick={()=> history.push('/job-listing')} to={h1}>Search your dream jobs</NavLink>
                </div>
                <h1 class="display-4"></h1>
                <h1 className="m-l-100"></h1>
                
                </div>
                <Footer/>                
            </div>
        )
    }
        
    
}

export default LandingPage;