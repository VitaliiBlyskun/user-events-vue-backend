const express = require("express");

const { usersController } = require("../../controllers");

const { validateBody } = require("../../middlewares");

const { userSchema } = require("../../schemas");

const router = express.Router();

router.get("/", usersController.getAll);

router.get("/:id", usersController.getById);

router.post("/", validateBody(userSchema.addSchema), usersController.addUser);

router.delete("/:id", usersController.deleteById);

router.put("/:id", validateBody(userSchema.addSchema), usersController.updateById);

module.exports = router;
