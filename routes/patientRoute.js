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
            Patient.findOne({ 'phone': req.body.phone }, (err, user) => {
                if (!user) return res.json({ success: true, message: 'Auth failed, phone not found' });
                else if (err) return res.json({ loginSuccess: false, message: 'Auth failed', err });
                else {

                    contactPromise = await patientServices.addRecord(req.body);
                    res.json({ success: true, data: contactPromise })
                }

            })
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