const mongoose = require('mongoose');
const recordSchema = mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    marks: {
        type: String,
    },
}, {
        timestamps: true
    })

module.exports = mongoose.model('record', recordSchema);

// ID :: dementia,bt,depress,anxity