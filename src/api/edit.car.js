import api from "./api";

export const editCar = async (Car) => {
    
    const response =  await api.put(`/cars/${Car.id}`, Car);
    return response.data;
};
