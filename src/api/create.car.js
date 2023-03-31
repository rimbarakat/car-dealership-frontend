import api from "./api";

export const createCar = async (Car) => {
    const response =  await api.post(`/cars`, Car);
    return response.data;
};
