const patientSchema = require('../models/patient');

const getPatient = function (params) {
    return patientSchema.find(params).exec();
}
const savePatient = function (productObj) {
    let prod = new patientSchema(productObj);
    return prod.save();
}

const addRecord = function (param) {
    return patientSchema.updateMany({ "_id": param._id }, { $push: { records: param.data } }, { multi: true }).exec();
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