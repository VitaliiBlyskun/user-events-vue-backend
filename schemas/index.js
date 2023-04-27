// const { addSchema } = require("./users")

// module.exports = {
//     addSchema,
// }

const userSchema = require("./users");
const eventSchema = require("./events");

module.exports = {
    userSchema,
    eventSchema
}