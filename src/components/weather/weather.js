import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';

let zipCode = 37221;

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherLoaded: false,
            objResult: {},
            error: null,
            modal:false
        }
    this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getWeather();
    }
    
      changeZipClick() {
          console.log("change zip code");
          zipCode = document.getElementById("zipCodeInput").value;
          console.log("new zipcode:", zipCode);
            this.setState({
                weatherLoaded: false,
                objResult: {},
                error: null,
            }, this.setState({
                modal: !this.statemodal
            }), this.getWeather());
      }




    getWeather() {
        console.log("get weather");
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=f5f69f7deb5aae2ed812df935759b130&units=imperial`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log("result:", result);
                this.setState({
                    weatherLoaded: true,
                    objResult: result,
                    isHidden: true
                });
            },
            (error) => {
                console.log("error");
                this.steState({
                    isLoaded: true,
                    error: error
                });
            })
        }
        render() {
            const {error, weatherLoaded, objResult} = this.state;

            if (error) {
                return (
                    <div><p>Error</p></div>
                )
            }else if (!weatherLoaded) {
                return (
                    <div className="loadingWeather"> <h3>Loading...</h3> </div>
                )
            }else {
                return (
                    <div className="weatherRender">
                       <div className="weatherContainer">
                          <p>{objResult.name}</p>
                          <h1>{Math.round(objResult.main.temp)}&deg;</h1>
                            <button onClick={this.toggle}>
                               <i className="changeZip"></i>
                            </button>
                       </div>
                       <p className="description">{objResult.weather[0].description}</p>
                       <div> 
                           <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}></ModalHeader>
                                <ModalBody>
                                    <input id="zipCodeInput" type="text" className="zipinput" placeholder="New Zipcode"></input>
                                </ModalBody>
                                <ModalFooter>
                                    <button className="changeButton" onClick={this.changeZipClick.bind(this)}><p>Change Zipcode</p></button>
                                </ModalFooter>
                            </Modal>
                       </div>

                    </div>
                )
            }
        }
    };
    export default Weather;