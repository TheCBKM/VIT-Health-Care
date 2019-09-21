const app = module.exports = require('express')();
const patientServices = require('../services/patientServices')
const Patient = require('../models/patient')
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

app.post('/login', (req, res) => {
    (async () => {
        try {
            console.log(req.body)
            Patient.findOne({ 'phone': req.body.phone }, async (err, user) => {
                if (!user) {
                    contactPromise = await patientServices.savePatient(req.body);
                    res.json({ success: true, data: contactPromise })
                }
                else if (err) return res.json({ loginSuccess: false, message: 'Auth failedd', err });
                else {
                    res.json({ success: true, data: user })
                }
            })
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

app.post('/addrecord', (req, res) => {
    (async () => {
        try {
            contactPromise = await patientServices.addRecord(req.body);
            res.json({ success: true, data: contactPromise })
        }
        catch (e) {
            console.log(e)
            res.json({ success: false })
        }
    })();
})



app.get('/ava', (req, res) => {
    res.send("ava")
})