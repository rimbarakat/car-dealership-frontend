import api from "./api";

export const getUserInfo = async (userId) => {
    const _uid = (userId.queryKey[1]);               //ask
    const response =  await api.get(`/user/${_uid}`);
    return response.data;
};
