const app = module.exports = require('express')();
const patientServices = require('../services/patientServices')
app.get('/getall', (req, res) => {
    (async () => {
        try {
            console.log(req.body)
            contactPromise = await patientServices.getPatient(req.body);

            res.json({ success: true, data: contactPromise })
        }
        catch (e) {
            console.log(e)
            res.json({ success: false })
        }
    })();
})


app.post('/save', (req, res) => {
    (async () => {
        try {
            contactPromise = await patientServices.savePatient(req.body);
            res.json({ success: true, data: contactPromise })
        }
        catch (e) {
            console.log(e)
            res.json({ success: false })
        }
    })();
})


app.get('/ava',(req,res)=>{
    res.send("ava")
})