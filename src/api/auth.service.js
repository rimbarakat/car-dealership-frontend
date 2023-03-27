import api from "./api";

export const login = async ({ email, password }) => {
  const response = await api.post("/auth/login", {
    email: email,
    password: password,
  });
  return response.data;
};
