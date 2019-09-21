const recordSchema = require('../models/records');

const getRecord = function (params) {
    return recordSchema.find(params).exec();
}
const saveRecord = function (productObj) {
    let prod = new recordSchema(productObj);
    return prod.save();
}
const deleteRecords = function (prodId) {
    return recordSchema.deleteOne({"_id": prodId }).exec();
}

module.exports = {
    getRecord,
    saveRecord,
    deleteRecords
}