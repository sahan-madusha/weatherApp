const axios = require('axios'); // legacy way



const getGeo = (location) => {
  return new Promise((resolve, reject) => {
    const groUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+location+"&limit=5&appid=/*api key*/";

    // Make a request for a user with a given ID
    axios.get(groUrl)
      .then(function (response) {
        // handle success
        resolve({
          lat:response.data[0].lat,
          lon:response.data[0].lon,
          name:response.data[0].name,
        });
      })
      .catch(function (error) {
        // handle error
        reject(error)
      });
  })
}

module.exports = getGeo;
