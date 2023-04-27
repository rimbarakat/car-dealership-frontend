import api from "./api";

export const getAllBookings = async () => {
    const response =  await api.get(`/bookings`);
    return response.data;
};
