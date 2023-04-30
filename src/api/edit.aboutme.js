import api from "./api";

export const editAboutme = async (userId,users) => {
       
    const response =  await api.put(`/users/${users.id}`, users);
    return response.data;
};
