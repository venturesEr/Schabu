import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import MicRecorder from 'mic-recorder-to-mp3'
import './candidate.css'

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
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
            apiResponce: ""
        }

        this.done = this.done.bind(this);

        this.nextButton = this.nextButton.bind(this)
    }

    componentDidMount() {
        let urlFetch = "http://localhost:9000/getQuestion";
        fetch(urlFetch)
            .then(res => res.text())
            .then(res => {
                res = JSON.parse(res)
                this.setState({ myArray: res })
            });
    }


    nextButton() {
        var fd = new FormData();
        fd.append('upl', this.state.myArray[this.state.questionCounter].recBlob);
        fd.append('id', '1234567889')
        fd.append('question', this.state.questionCounter)
        fetch('http://localhost:9000/postRec',
            {
                method: 'post',
                body: fd
            }).then(res=>res.text()).then(res => console.log(res))


        if (this.state.questionCounter + 1 <= 7) {
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
        console.log("hii")
        var fd = new FormData();
        fd.append('upl', this.state.myArray[this.state.questionCounter].recBlob);
        fd.append('id', '1234567889')
        fd.append('question', this.state.questionCounter)
        fetch('http://localhost:9000/postRec',
            {
                method: 'post',
                body: fd
            }).then(res=>res.text()).then(res => {this.setState({apiResponce: res}); 
            if(this.state.apiResponce == "Your recrding is saved into the database"){
                alert("Your test is done and saved, you can close this tab!")
            }
        })
       
    }

    render() {
        return (
            <div classNanme="candidate">
                <div className="container-fluid nav_bg">
                    <div class="col-12 mx-auto">
                        <div className="row cust_candiate align-items-center">
                            <div className="col-12 col-lg-10 col-sm-12 mx-auto" >
                                <h1>Web Developer Interview</h1>
                                <h1>Candidate: Pranav</h1>
                                <div className="row justify-content-center">
                                    <h1>{this.state.myArray[this.state.questionCounter].question_text}</h1>
                                </div><br /><br />


                                <div className="row ">
                                    <div className="col-12 col-lg-6">
                                        {this.state.myArray[this.state.questionCounter].recCounter <= 0 ?
                                            <Button disabled="true">Record</Button>
                                            : <Button type="primary" onClick={this.start} disabled={this.state.isRecording}>Record</Button>}
                                        <h6>Recording Left: - {this.state.myArray[this.state.questionCounter].recCounter}</h6>
                                        <Button onClick={this.stop} disabled={!this.state.isRecording}>
                                            Stop
                                        </Button>
                                        <audio src={this.state.myArray[this.state.questionCounter].recURL} controls="controls" />
                                    </div>
                                    {console.log(this.state.myArray)}

                                    <div className="col-12 col-lg-6">
                                        <div className="row justify-content-center">
                                            {this.state.questionCounter < 7 ? <Button type="primary" onClick={this.nextButton}>Next</Button> : <Button type="primary" onClick={this.done}>Finish</Button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default candidate