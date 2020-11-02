import React from 'react'
import "./Login.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "", name: "" , email:"", phone_number: ""};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    callAPI(val) {
        let urlFetch = "http://localhost:9000/testAPI?firstname=" + val.name + "&email=" + val.email + "&phone=" + val.phone;
        fetch(urlFetch)
            .then(res => res.text())
            .then(res => {this.setState({ apiResponse: res }); if(this.state.apiResponse == "Success"){
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
                                    <Form.Control value={this.state.value} onChange={this.handleChangePhone} placeholder="Enter your email name" />

                                </Form.Group>

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