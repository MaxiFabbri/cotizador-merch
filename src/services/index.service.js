import Users from "../dao/Users.dao.js";

import UserRepository from "../repository/UserRepository.js";

export const usersService = new UserRepository(new Users());