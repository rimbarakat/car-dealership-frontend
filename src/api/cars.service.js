import api from "./api";

export const getCars = async () => {
    const response =  await api.get('/cars');
    return response.data;
};
