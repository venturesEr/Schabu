import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect } from "react-router-dom";
import MicRecorder from 'mic-recorder-to-mp3'
import '../css/candidate.css'
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Footer/index";
import history from '../history'

const Mp3Recorder = new MicRecorder({ bitRate: 256 });
let Question = [{ "question_id": 1, "question_text": "Are you and australian Resident?" }];

class candidate extends React.Component {

    constructor() {
        super()


        this.state = {
            myArray: Question,
            questionCounter: 0,
            isRecording: false,
            isBlocked: false,
            temp: null,
            apiResponce: "",
            redirect: false,
            redirectUR: ""
        }

        this.done = this.done.bind(this);

        this.nextButton = this.nextButton.bind(this)
    }

    componentDidMount() {
        let name = (this.props.location.search)
        name = name.split("=")[1];

        console.log(name)

        let urlFetch = "http://localhost:9000/getQuestion?name="+name;
        fetch(urlFetch)
            .then(res => res.text())
            .then(res => {
                res = JSON.parse(res)
                this.setState({ myArray: res })
            });
    }


    nextButton() {
        let name = (this.props.location.search)
        name = name.split("=")[1];
        var fd = new FormData();
        fd.append('upl', this.state.myArray[this.state.questionCounter].recBlob);
        fd.append('id', name)
        fd.append('question', this.state.questionCounter)
        fd.append('filename', 'my_file.wav');
        fetch('http://localhost:9000/postRec',
            {
                method: 'post',
                body: fd
            }).then(res=>res.text()).then(res => console.log(res))


        if (this.state.questionCounter + 1 <= (this.state.myArray.length - 1)) {
            this.setState((prevState) => (
                {
                    questionCounter: prevState.questionCounter + 1
                }
            )
            )
        } else {
            console.log("hi")
        }
    }


    start = () => {

        let index = this.state.questionCounter;
        let c = [...this.state.myArray]
        c[this.state.questionCounter].recCounter = c[this.state.questionCounter].recCounter - 1;
        console.log(c[this.state.questionCounter].recCounter)
        if (!c[this.state.questionCounter].recCounter <= 0) {
            this.setState((prevState) => (
                {
                    myArray: c
                }
            ))
        }


        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };
    stop = () => {
        let index = this.state.questionCounter;
        let c = [...this.state.myArray]
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {

                const blobURL = URL.createObjectURL(blob)

                const file = new File(buffer, 'music.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                console.log(file)
                let c = [...this.state.myArray]
                c[this.state.questionCounter].recBlob = blob;
                c[this.state.questionCounter].recURL = blobURL;
                this.setState({ myArray: c, isRecording: false });
            }).catch((e) => console.log(e));
    };

    async done1(file) {
        let blob = await fetch(file).then(r => r.blob());
        console.log(blob)
    }

    done() {
        //let curretCouter = 0
        let name = (this.props.location.search)
        name = name.split("=")[1];
        console.log("hii")
        var fd = new FormData();
        fd.append('upl', this.state.myArray[this.state.questionCounter].recBlob);
        fd.append('id', name)
        fd.append('question', this.state.questionCounter)
        fd.append('filename', 'my_file.wav');
        fd.append("submit", "true");
        fetch('http://localhost:9000/postRec',
            {
                method: 'post',
                body: fd
            }).then(res=>res.text()).then(res => {this.setState({apiResponce: res}); 
            if(this.state.apiResponce == "Your recrding is saved into the database"){
                alert("Your test is done and saved, you can close this tab!")
                history.push('/thankyou')
            }
        })
       
    }

    render() {

        let name = (this.props.location.search)
        name = name.split("=")[1];

        return (
            <>
            <NavBar/>
            <div classNanme="candidate">
                <div className="jumbotron">
                        <div className="row cust_candiate">
                            <div className="m-l-100 " style={{width:'1600px',backgroundColor:'white'}}>
                            {this.state.redirect == true ? <Redirect exact to='thankyou'/> : null}
                                <div className="m-t-40 m-l-30">
                                    <h1>Hello, {name}, start recording when you are ready!</h1>
                                </div>
                                <div  className="m-t-40 m-l-30">
                                    <h1>{this.state.myArray[this.state.questionCounter].question_text}</h1>
                                </div>
                                <div  className="m-t-40 m-l-30">
                                    <div>
                                        {this.state.myArray[this.state.questionCounter].recCounter <= 0 ?
                                            <Button className="m-t-30" disabled="true">Click to record</Button>
                                            : <Button className="m-t-30" type="primary" onClick={this.start} disabled={this.state.isRecording}>Click to Record</Button>}
                                        <h6 className="m-t-30">Recording Left: - {this.state.myArray[this.state.questionCounter].recCounter}</h6>
                                        <Button className="m-t-20" onClick={this.stop} disabled={!this.state.isRecording}>
                                            Stop Recording
                                        </Button>
                                        <div className="m-t-30">
                                        <audio src={this.state.myArray[this.state.questionCounter].recURL} controls="controls" />
                                        </div>
                                    </div>
                                    {console.log(this.state.myArray)}

                                    <div className="m-t-30">
                                        <div>
                                            {this.state.questionCounter < (this.state.myArray.length - 1) ? <Button type="primary" onClick={this.nextButton}>Next</Button> : <Button type="primary" onClick={this.done}>Finish</Button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Footer></Footer>
            </>
        )
    }
}

export default candidate