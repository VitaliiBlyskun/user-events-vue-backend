const express = require("express");

const { usersController } = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");

const { userSchema } = require("../../schemas");

const router = express.Router();

router.get("/", usersController.getAll);

router.get("/:id", isValidId, usersController.getById);

router.post("/", validateBody(userSchema.addSchema), usersController.addUser);

router.delete("/:id", isValidId, usersController.deleteById);

module.exports = router;
