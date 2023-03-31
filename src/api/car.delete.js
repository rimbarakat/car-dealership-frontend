import api from "./api";

export const deleteCar = async (id) => {
    const _id = (id.queryKey[1]);               
    const response =  await api.delete(`/cars/${_id}`);
    return response.data;
};
