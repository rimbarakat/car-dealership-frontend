import api from "./api";

export const deleteCar = async (id) => {
     
    console.log(id);              
    const response =  await api.delete(`/cars/${id}`);
    return response.data;
};
