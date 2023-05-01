const { controllerWrapper } = require('../../utils');
const addEvent = require('./addEvent');

module.exports = {
    addEvent: controllerWrapper(addEvent),
}