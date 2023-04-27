const { Schema, model } = require("mongoose");

const { handleMongooseError } = require('../utils');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
        },
    eventsCount: {
      type: Number,
      default: 0,
        },
    nextDate: {
      type: String,
      default: "Nothing"
    },
  }, { versionKey: false, timestamps: true });

userSchema.post("save", handleMongooseError)

const User = model("User", userSchema);

module.exports = User;
