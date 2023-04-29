import api from "./api";

export const editAboutme = async (users) => {
    
    const response =  await api.put(`/user/${users.id}`, users);
    return response.data;
};
