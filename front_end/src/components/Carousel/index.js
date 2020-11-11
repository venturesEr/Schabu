import React from "react";
// import { Link } from "react-router-dom";
import image1 from "../../Assets/hand-shake.jpg";
import image2 from "../../Assets/lagan.jpg";
import image3 from "../../Assets/standing-mountain.jpeg";


export default class Carousel extends React.Component{
  render() {
    return (
      //prettier-ignore
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* Indicators to how many carousels we have */}
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
  
          {/* Wrapper for image slides */}
          <div className="carousel-inner">
            {/* Search bar here */}
            <div className="position-absolute h-100 w-100" style={{ zIndex: 2 }}>
              <div className="row h-100 px-5 py-5 d-flex align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 m-l-100">
                  <div
                    className="card shadow bg-white rounded"
                    style={{ backgroundColor: "#f5f5f5", opacity: 1 }}
                  >
                    <div className="card-body m-2">
                      <h2 className="m-b-20">
                        Great things never came from comfort zones!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Slides here */}
            <div className="carousel-item active">
              <img style ={{width:'100%',height:'450px', objectFit:'cover'}} className="d-block w-100" src={image1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img style ={{width:'100%',height:'450px', objectFit:'cover'}} className="d-block w-100" src={image2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img style ={{width:'100%',height:'450px', objectFit:'cover'}} className="d-block w-100" src={image3} alt="Third slide" />
            </div>
          </div>
  
          {/* Left and Right controls <a> */}
          <a
            className="carousel-control-prev m-0"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon m-0" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next m-0"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
}
