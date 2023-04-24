const controllerWrapper = require('../../utils/controllerWrapper');
const getAll = require('./getAll');
const getById = require('./getById');
const addUser = require('./addUser');
const deleteById = require('./deleteById');
const updateById = require('./updateById');

module.exports = {
    getAll: controllerWrapper(getAll),
    getById: controllerWrapper(getById),
    addUser: controllerWrapper(addUser),
    deleteById: controllerWrapper(deleteById),
    updateById: controllerWrapper(updateById),
}