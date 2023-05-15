import api from "./api";

export const editAboutme = async (userId,users) => {
    console.log(userId);
    const response =  await api.put(`/users/${userId}`, users);
    console.log(response.data);
    return response.data;
};
