import api from "./api";

export const getUserInfo = async (userId) => {
    const _uid = (userId.queryKey[1]);   
    const response =  await api.get(`/users/${_uid}`);
    return response.data;
};
