import React from 'react'
import "../css/Login.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Job_table from './Job_table';
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/index";
import { NavLink } from 'react-router-dom';
import bg from '../Assets/Schabu-Pic.jpg';
import history from '../history'

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
                    history.push('/thankyou')
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
            <>
            <NavBar></NavBar>
            <div style={{backgroundImage:`url(${bg})`,width:'100%', height:'100%', filter: 'blur(1px)', magin:'0px', backgroundSize:'cover', position:'absolute',
            backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
            </div>
            <div className="Login m-l-100" style={{position:'relative', height:'850px'}}>
                <div style={{paddingLeft:'20px',paddingTop:'40px', marginTop:'100px', color:'white', marginLeft:'1000px', marginRight:'200px',height:'700px', backgroundColor:'rgba(255, 255, 255, .15)', backdropFilter:'blur(100px)',  borderRadius:'25px'}}>
                <h1 className=" m-l-20" style={{position:'relative'}}>Confirm your details</h1>
                <div className="container-fluid m-t-30">
                    <h5 className="m-l-14 m-b-24">Your Personal Details</h5>
                    <div className="row m-l-30">
                        <div className="row cust_row">
                            {/* from contents can go here */}
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control value={this.state.value} onChange={this.handleChangeName} placeholder="Enter your first name" />

                                    <Form.Label className="m-t-20">Email Address</Form.Label>
                                    <Form.Control value={this.state.value} onChange={this.handleChangeEmail} placeholder="Enter your email name" />


                                    <Form.Label className="m-t-20">Phone Number</Form.Label>
                                    <Form.Control value={this.state.value} onChange={this.handleChangePhone} placeholder="Enter your phone number" />

                                    <Form.Label className="m-t-20">Job ID</Form.Label>
                                    <select className="custom-select"value={this.state.value} onChange={this.handleChangeJobRole} >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>

                                </Form.Group>

                                <a href='http://localhost:3000/jobtable' target='__blank'>Click here to see the details of the Job!</a><br/><br/>
                                <Button variant="primary" type="submit">
                                    Confirm
                                </Button>
                                <Button href="/job-listing" className="m-l-30 orrange" type="submit">
                                    Cancel
                                </Button>

                            </Form>
                        </div>

                        <div className="row justify-content-center">
                            <p>{this.state.apiResponse}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        <Footer/>
        </>
        )
    }
}

export default Login;