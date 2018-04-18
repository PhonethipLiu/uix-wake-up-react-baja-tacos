import React, {component} from 'react';

let zipCode = 37221;

class Weather extends Component {
    constructor(props) {
        super(props);
    }
};

function getWeather() {
    console.log("get weather");
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=f5f69f7deb5aae2ed812df935759b130&units=imperial')
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