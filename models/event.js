// const { Schema, model } = require("mongoose");

// const { handleMongooseError } = require("../utils");

// const eventSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   startDate: {
//     type: String,
//     match: /^\d{2}-\d{2}-\d{4}$/,
//     required: true,
//     },
//     endDate: {
//     type: String,
//     match: /^\d{2}-\d{2}-\d{4}$/,
//     required: true,
//   },
// }, { versionKey: false, timestamps: true });

// eventSchema.post("save", handleMongooseError)

// const Event = model("Event", eventSchema);

// module.exports = Event;

const { ObjectId } = require('mongoose').Types;
const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../utils");

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      match: /^\d{2}-\d{2}-\d{4}$/,
      required: true,
    },
    endDate: {
      type: String,
      match: /^\d{2}-\d{2}-\d{4}$/,
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
  },
  { versionKey: false, timestamps: true }
);

eventSchema.post("save", handleMongooseError);

const Event = model("Event", eventSchema);

module.exports = Event;
