const dementia = require('./questions/demetia.json')
const depress = require('./questions/depress.json')
const bt = require('./questions/brain-teasers.json')
const app = require('express')();


// console.log(dementia)
// console.log(depress)
// console.log(bt)

app.get('/dementia', (req, res) => {
    res.json(dementia)
})
app.get('/depress', (req, res) => {
    res.json(dementia)
})
app.get('/bt', (req, res) => {
    res.json(bt)
})

app.listen(process.env.PORT || 5000)
