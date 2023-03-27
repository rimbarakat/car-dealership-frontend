export const isAdmin = () => {
  const user = getUser();
  try {
    const payload = JSON.parse(user);
    return payload.userType === "admin";
  } catch (e) {
    console.log("Problem parsing...");
  }
  return false;
};
export const isUser = () => {
  const user = getUser();
  try {
    const payload = JSON.parse(user);
    return payload.userType !== "admin";
  } catch (e) {
    console.log("Problem parsing...");
  }
  return false;
};

export const isAuthenticated = () => {
  return !!getToken();
};

const getToken = () => {
  return localStorage.getItem("token");
};

const getUser = () => {
  return localStorage.getItem("user");
};

