const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    records: [{

        type: Schema.Types.ObjectId,
        ref: 'record',

    }
    ],
}, { timestamps: true })

module.exports = mongoose.model('patient', patientSchema);