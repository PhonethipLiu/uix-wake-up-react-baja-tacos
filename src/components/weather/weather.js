import React, {Component} from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './weather.css';
import firebase from 'firebase';


class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherLoaded: false,
            objResult: {},
            error: null,
            modal: false
        }
    this.toggle = this.toggle.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getUser = this.getUser.bind(this);
    }
    toggle(props){
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        console.log("ZIP", this.props.userObj)
        this.getWeather(this.props.userObj.zip);
    }

    getUser() {
        var userZip = this.props.userObj.zip;
        console.log("userZip", userZip);
        this.getWeather(userZip);
    }
    
      changeZipClick = ()=> {
      // console.log("get another");
      let zipCode = parseInt(document.getElementById("zip").value);
      console.log("get another clicked zipcode", zipCode);

      this.props.updateZip(zipCode);
      
  //     var userRef = firebase.database().ref(`/users/${this.props.uid}`);
  //     userRef.update({ zip: zipCode });
      
  //     this.setState({
  //         weatherLoaded: false,
  //         objResult: {},
  //         error: null,
  //         zip: zipCode,
  //     }, 
  this.setState({         
  modal: !this.state.modal
      })
  this.getWeather(zipCode);
  // }
      }

    getWeather(zip) {
        console.log("get weather", zip);
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=f5f69f7deb5aae2ed812df935759b130&units=imperial`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log("result:", result);
                this.setState({
                    weatherLoaded: true,
                    objResult: result,
                    // isHidden: true
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
                    <div className="container weatherRender">
                       <div className="row weatherContainer">
                          <h1 className="col-6 tempRender">{Math.round(objResult.main.temp)}&deg;</h1>
                          
                        <div className="col-6 weatherRight">
                          <h5>{objResult.name}</h5>
                          

                            <Button color="light" onClick={this.toggle}>             
                               <p className="changeZip">Change Zip</p>
                            </Button>

                       <p className="description">{objResult.weather[0].description}</p>
                       </div>
                       </div>
                       
                       
                       <div> 


                           <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                              <ModalHeader toggle={this.toggle}></ModalHeader>
                                <ModalBody>
                                    <input id="zip" type="text" className="zipinput" placeholder="New Zipcode"></input>
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
