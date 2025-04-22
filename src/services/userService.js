// services/userService.js
import API from "./api";

export const fetchUsers = () => API.get("/users");
export const getUserById = (id) => API.get(`/users/${id}`);
export const createUser = (data) => API.post("/users", data);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
