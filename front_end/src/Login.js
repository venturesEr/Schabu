import React from 'react'
import "./Login.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Job_table from './Job_table';
import { NavLink } from 'react-router-dom';
import history from './history'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { changeJob: "1", apiResponse: "", name: "", email: "", phone_number: "" };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeJobRole = this.handleChangeJobRole.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    callAPI(val) {
        let urlFetch = "http://localhost:9000/testAPI?firstname=" + val.name + "&email=" + val.email + "&phone=" + val.phone+ "&job_id=" + val.changeJob;
        fetch(urlFetch)
            .then(res => res.text())
            .then(res => {
                this.setState({ apiResponse: res }); if (this.state.apiResponse == "Success") {
                    alert("Your record is been keept")
                }
            });


    }

    // componentWillMount() {
    //   this.callAPI();
    // }

    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value })
    }

    handleChangePhone(event) {
        this.setState({ phone: event.target.value })
    }

    handleChangeJobRole(event) {
        this.state.changeJob = event.target.value;
    }

    handleSubmit(event) {
        this.callAPI(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <div className="container-fluid">
                    <div className="col-12 col-lg-12 col-sm-12 mx-auto">
                        <div className="row align-items-center justify-content-center cust_row">
                            {/* from contents can go here */}
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Enter your name</Form.Label>
                                    <Form.Control value={this.state.value} onChange={this.handleChangeName} placeholder="Enter your first name" />

                                    <Form.Label>Enter your Email</Form.Label>
                                    <Form.Control value={this.state.value} onChange={this.handleChangeEmail} placeholder="Enter your email name" />


                                    <Form.Label>Enter your Phone Number</Form.Label>
                                    <Form.Control value={this.state.value} onChange={this.handleChangePhone} placeholder="Enter your phone number" />

                                    <Form.Label>Select any job id</Form.Label>
                                    <select className="custom-select"value={this.state.value} onChange={this.handleChangeJobRole} >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>

                                </Form.Group>

                                <a href='http://localhost:3000/jobtable' target='__blank'>Click here to see the details of the Job!</a><br/><br/>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>
                        </div>

                        <div className="row justify-content-center">
                            <p>{this.state.apiResponse}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;