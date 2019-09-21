const mongoose = require('mongoose');
const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    records: [{
        record: {
            type: Schema.Types.ObjectId,
            ref: 'record',
        }
    }
    ],
}, { timestamps: true })

module.exports = mongoose.model('patient', patientSchema);