const recordSchema = require('../models/record');

const getPatient = function (params) {
    return recordSchema.find(params).exec();
}
const savePatient = function (productObj) {
    let prod = new recordSchema(productObj);
    return prod.save();
}
const deleteRecords = function (prodId) {
    return recordSchema.deleteOne({"_id": prodId }).exec();
}

module.exports = {
    getPatient,
    savePatient,
    addRecord,
    deleteRecords
}