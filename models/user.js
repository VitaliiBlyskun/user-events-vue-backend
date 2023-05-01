const { Schema, model } = require("mongoose");

const { handleMongooseError } = require('../utils');

const userSchema = new Schema(
   {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  }, { versionKey: false, timestamps: true });

userSchema.post("save", handleMongooseError)

const User = model("User", userSchema);

module.exports = User;
