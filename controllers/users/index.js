// const { controllerWrapper } = require('../../utils');
// const getAll = require('./getAll');
// const getById = require('./getById');
// const addUser = require('./addUser');
// const deleteById = require('./deleteById');

// module.exports = {
//     getAll: controllerWrapper(getAll),
//     getById: controllerWrapper(getById),
//     addUser: controllerWrapper(addUser),
//     deleteById: controllerWrapper(deleteById),
// }



const { controllerWrapper } = require('../../utils');
const getAll = require('./getAll');
const getById = require('./getById');
const addUser = require('./addUser');
const deleteById = require('./deleteById');
const getUserEvents = require('./getUserEvents');
const deleteUserEvent = require('./deleteUserEvent');

module.exports = {
    getAll: controllerWrapper(getAll),
    getById: controllerWrapper(getById),
    addUser: controllerWrapper(addUser),
    deleteById: controllerWrapper(deleteById),
    getUserEvents: controllerWrapper(getUserEvents),
    deleteUserEvent: controllerWrapper(deleteUserEvent)
}