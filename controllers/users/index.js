const { controllerWrapper } = require('../../utils');
const getAll = require('./getAll');
const getById = require('./getById');
const addUser = require('./addUser');
const deleteById = require('./deleteById');

module.exports = {
    getAll: controllerWrapper(getAll),
    getById: controllerWrapper(getById),
    addUser: controllerWrapper(addUser),
    deleteById: controllerWrapper(deleteById),
}