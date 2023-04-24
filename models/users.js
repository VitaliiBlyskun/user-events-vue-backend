const fs = require("fs/promises");
const { v4 } = require("uuid");
const path = require("path");
const usersPath = path.join(__dirname, "users.json");

const listUsers = async () => {
  try {
    const data = await fs.readFile(usersPath);
    const users = JSON.parse(data);
    return users;
  } catch (error) {
    console.log(error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await listUsers();
    const result = user.find((user) => user.id === id);
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

const removeUser = async (id) => {
  try {
    const users = await listUsers();
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return null;
    }
    const [removeUserById] = users.splice(index, 1);
    await fs.writeFile(usersPath, JSON.stringify(users));
    return removeUserById;
  } catch (error) {
    console.log(error.message);
  }
};

const addUser = async (body) => {
  try {
    const users = await listUsers();
    const newUser = { ...{ id: v4(), ...body } };
    users.push(newUser);
    await fs.writeFile(usersPath, JSON.stringify(users));
    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};

const updateUser = async (id, body) => {
  const users = await listUsers();
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    return null;
  }
  users[index] = { id, ...body };
  await fs.writeFile(usersPath, JSON.stringify(users));
  return users[index];
};

module.exports = {
  listUsers,
  getUserById,
  removeUser,
  addUser,
  updateUser,
};
