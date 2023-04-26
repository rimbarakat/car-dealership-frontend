import api from "./api";

export const getAllBookings = async () => {
    const response =  await api.get(`/cars/bookings`);
    return response.data;
};
