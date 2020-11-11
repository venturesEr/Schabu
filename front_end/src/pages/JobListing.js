import React from 'react';
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/index";

class JobListing extends React.Component {

    constructor() {
        super()
        this.state = {
            myArray: null,
        }
    }

    componentDidMount() {
        let urlFetch = "http://localhost:9000/getJobs";
        fetch(urlFetch)
            .then(res => res.text())
            .then(res => {
                res = JSON.parse(res)
                this.setState({ myArray: res })
                console.log(this.state.myArray)
            });
    }


    render() {
        return (
            <>
            <NavBar/>
            <div className="job_table">
                <div className="container-fluid">
                    <div className="col-12 col-lg-12 col-sm-12 mx-auto">
                        <div className="row align-items-center justify-content-center cust_row">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Job Id</th>
                                        <th scope="col">Job Description</th>
                                        <th scope="col">Job Name</th>
                                        <th scope="col">Job Role</th>
                                        <th scope="col">Job Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.myArray != null ? this.state.myArray.map((person, index) => (

                                        <tr>
                                            <th scope="row">{this.state.myArray != null ? person.job_id : ""}</th>
                                            <td>{this.state.myArray != null ? person.job_description : ""}</td>
                                            <td>{this.state.myArray != null ? person.job_name : ""}</td>
                                            <td>{this.state.myArray != null ? person.job_role : ""}</td>
                                            <td>{this.state.myArray != null ? person.job_type : ""}</td>
                                        </tr>

                                    )) : ""}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default JobListing;