import React, {Component} from 'react';

let zipCode = 37221;

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherLoaded:false,
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
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=f5f69f7deb5aae2ed812df935759b130`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log("result:", result);
                this.setState({
                    loadWeather: true,
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
                       <div className="">
                          <p>{objResult.name}</p>
                       </div>
                    </div>
                )
            }
        }
    };
    export default Weather;