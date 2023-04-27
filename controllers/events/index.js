const { controllerWrapper } = require('../../utils');
const addEvent = require('./addEvent');
const deleteEvent = require('./deleteEvent');
const fetchEvent = require('./fetchEvent');

module.exports = {
    addEvent: controllerWrapper(addEvent),
    deleteEvent: controllerWrapper(deleteEvent),
    fetchEvent: controllerWrapper(fetchEvent),
}