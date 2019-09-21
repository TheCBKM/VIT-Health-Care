const dementia = require('./questions/demetia.json')
const depress = require('./questions/depress.json')
const bt = require('./questions/brain-teasers.json')
const app = require('express')();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cbkm:cbkm@cbkm-zokml.mongodb.net/VIT-HACK?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected to mongo")
});

app.get('/dementia', (req, res) => {
    res.json(dementia)
})
app.get('/depress', (req, res) => {
    res.json(depress)
})
app.get('/bt', (req, res) => {
    res.json(bt)
})
app.get('/bt/:id',(req,res)=>{
    res.json(bt[Number(req.params.id)])
})

app.listen(process.env.PORT || 5000)
