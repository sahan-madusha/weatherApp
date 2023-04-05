const weather = require('./API/weather');
const geo = require('./API/geo');

/*
weather(12.33,4.4)
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log("err");
        });
*/

geo('kandy')
        .then((data)=>{
            return weather(data.lat,data.lon)
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log("err new");
        });