const app = module.exports = require('express')();

app.use('/patient', require('./patientRoute'))
