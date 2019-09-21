const dementia = require('./questions/demetia.json')
const demetiaHindi = require('./questions/dementia-hindi.json')

const depress = require('./questions/depress.json')
const depressHindi = require('./questions/depress-hindi.json')

const bt = require('./questions/brain-teasers.json')
const app = require('express')();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
var routes = require('./routes')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', routes);
app.use('/static', require('express').static('BrainTeasers'))

mongoose.connect('mongodb+srv://cbkm:cbkm@cbkm-zokml.mongodb.net/VIT-HACK?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected to mongo")
});

app.get('/dementia', (req, res) => {
    res.json(dementia)
})
app.get('/hindi/dementia', (req, res) => {
    res.json(demetiaHindi)
})

app.get('/depress', (req, res) => {
    res.json(depress)
})

app.get('/hindi/depress', (req, res) => {
    res.json(depressHindi)
})
app.get('/bt', (req, res) => {
    res.json(bt)
})
app.get('/bt/:id', (req, res) => {
    res.json(bt[Number(req.params.id)])
})

app.listen(process.env.PORT || 5000)


//G8XHYUFUVU
//RV4K24EKPA

// 4315
// 9USRM2DLCS
// N6CB5QZC2j

//17BME0615
//J69PAfDU