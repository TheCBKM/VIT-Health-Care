const patientSchema = require('../models/patient');
const recordServices = require('../services/recordServices');
const mongoose = require('mongoose');
const getPatient = function (params) {
    return patientSchema.find(params).populate("records.record").exec();
}
const savePatient = function (productObj) {
    let prod = new patientSchema(productObj);
    return prod.save();
}

const addRecord = function (param) {
    (async () => {
        recordPromise = await recordServices.saveRecord(param)
        console.log(recordPromise)
        console.log(mongoose.Types.ObjectId(recordPromise._id.toString()))
        return patientSchema.updateMany({ "_id": param.id }, { $push: { records: mongoose.Types.ObjectId(recordPromise._id.toString()) } }, { multi: true }).exec();

    })();
}

const deletePatient = function (prodId) {
    return patientSchema.deleteOne({ "_id": prodId }).exec();
}

module.exports = {
    getPatient,
    savePatient,
    addRecord,
    deletePatient,
}