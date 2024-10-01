var express = require('express')
var app = express()
//const cors = require('cors');  // CORS for cross-origin requests
const countriesData = require('./data.json')

var sql = require("mssql");

var config = {
    user: 'Ken',
    password: '1234',
    server: 'DESKTOP-BRJAM44\\SQLEXPRESS',
    database: 'Countries_Database',
    
    options: {
        trustedConnection: true,
        trustServerCertificate: true
    }
};

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

//THIS ADDS A COUNTRY TO THE DATABASE (Multiple QUERY) 
app.post('/addCountryDatabase', async (req, res) => {

    const { countryName, topLevelDomain, alpha2Code, alpha3Code, callingCode, capital, altSpellings, subRegion, region, population, latLng, demonym, area, 
            timezones, borders, nativeName, numericCode, flag, cioc, independent, 
            currencyCode, currencyName, currencySymbol } = req.body;

    try {
        const pool = await sql.connect(config);
        
        const transaction = new sql.Transaction(pool)
        await transaction.begin();

        try {
            const countriesRequest = new sql.Request(transaction);
            // countriesRequest.input('countryName', sql.VarChar, countryName);

            countriesRequest.input('countryName', sql.VarChar, countryName);
            countriesRequest.input('topLevelDomain', sql.VarChar, topLevelDomain);
            countriesRequest.input('alpha2Code', sql.VarChar, alpha2Code);
            countriesRequest.input('alpha3Code', sql.VarChar, alpha3Code);
            countriesRequest.input('callingCode', sql.VarChar, callingCode);
            countriesRequest.input('capital', sql.VarChar, capital);
            countriesRequest.input('altSpellings', sql.VarChar, altSpellings);
            countriesRequest.input('subRegion', sql.VarChar, subRegion);
            countriesRequest.input('region', sql.VarChar, region);
            countriesRequest.input('population', sql.Int, population);
            countriesRequest.input('latLng', sql.VarChar, latLng);
            countriesRequest.input('demonym', sql.VarChar, demonym);
            countriesRequest.input('area', sql.Int, area);
            countriesRequest.input('timezones', sql.VarChar, timezones);
            countriesRequest.input('borders', sql.VarChar, borders);
            countriesRequest.input('nativeName', sql.VarChar, nativeName);
            countriesRequest.input('numericCode', sql.Int, numericCode);
            countriesRequest.input('flag', sql.VarChar, flag);
            countriesRequest.input('cioc', sql.VarChar, cioc);
            countriesRequest.input('independent', sql.Bit, independent);

            const countriesResults = await countriesRequest.query(`
                INSERT INTO dbo.Countries (countryName, topLevelDomain, alpha2Code, alpha3Code, callingCode, capital, altSpellings, subRegion, region, population, latLng, demonym, area, timezones, borders, nativeName, numericCode, flag, cioc, independent)
                VALUES (@countryName, @topLevelDomain, @alpha2Code, @alpha3Code, @callingCode, @capital, @altSpellings, @subRegion, @region, @population, @latLng, @demonym, @area, @timezones, @borders, @nativeName, @numericCode, @flag, @cioc, @independent);

                SELECT SCOPE_IDENTITY() AS Country_id;
            `);

            const CountryID = countriesResults.recordset[0].Country_id;

            const currencyRequest = new sql.Request(transaction);
            currencyRequest.input('Country_id', sql.Int, CountryID);
            currencyRequest.input('currencyCode', sql.VarChar, currencyCode);
            currencyRequest.input('currencyName', sql.VarChar, currencyName);
            currencyRequest.input('currencySymbol', sql.VarChar, currencySymbol);

            await currencyRequest.query(`
                INSERT INTO dbo.Currency (Country_id, code, currency_name, symbol) VALUES (@Country_id, @currencyCode, @currencyName, @currencySymbol);
            `)

            await transaction.commit();
            res.status(200).send("Succesfully added country and currency");

        } catch (error) {
            await transaction.rollback();
            console.error('Transaction error:', error);
            res.status(500).send('Transaction failed.');
        }
    } catch (err) {
        console.error('SQL error:', err);
        res.status(500).send('Failed to insert country.');
    }
})

//THIS GETS THE DATA FROM THE API
app.get('/getCountries', async (req, res) => {
    try {
        // Fetch data from JSONPlaceholder
        const response = await fetch('https://restcountries.com/v3.1/all');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();  // Parse the JSON data
        res.status(200).json(users);  // Return the user data
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Failed to fetch users.');
    }
})

app.listen(5000, function() {
    console.log('Server is running...');
});
