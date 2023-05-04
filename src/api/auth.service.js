import api from "./api";

export const login = async ({ email, password }) => {
  const response = await api.post("/auth/login", {
    email: email,
    password: password,
  });
  return response.data;
};
export const register = async ({ fullName, email, password, address }) => {
  console.log(address);
  const response = await api.post("/auth/register", {
    fullName: fullName,
    email: email,
    password: password,
    address: address,
  });
  return response.data;
};
