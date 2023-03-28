import api from "./api";

export const getCar = async (id) => {
    const _id = (id.queryKey[1]);               //ask
    const response =  await api.get(`/cars/${_id}`);
    return response.data;
};
