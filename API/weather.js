const axios = require('axios'); // legacy way

const getWeather = (lat, lon) => {
    return new Promise((resolve, reject) => {

        const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=/*api key*/";

        // Make a request for a user with a given ID
        axios.get(url)
            .then(function (response) {
                // handle success
                resolve({
                    curent:response.data.main.temp,
                });
            })
            .catch(function (error) {
                // handle error
                reject(error);
            });
    });
}



module.exports = getWeather;
