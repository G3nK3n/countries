var express = require('express')
var app = express()
const countriesData = require('./data.json')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.listen(5000, function() {
    console.log('Server is running...');
});

// const displayCountries = () => {
//     console.log("List of countries: ");
//     countriesData.forEach((country) => {
//         console.log("The country is: ", country.name)
//     });
// };

// displayCountries();