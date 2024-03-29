import api from "./api";

function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  

export const getCarBookings = async (id,date) => {
    //turn the date to the following format YYYY-MM-DD
    const response = await api.get(`/cars/${id}/slots?date=${formatDate(date)}`);
    console.log(response.data)
    return response.data;
}

export const getSpecificCarBooking = async (id) => {
    const response = await api.get(`/bookings/${id}`);
    console.log(response.data)
    return response.data;
}


export const sendBooking = async (id, from,to, Date) => {
    const booking = {
        date : formatDate(Date),
        from: from,
        to: to
    }
    const response = await api.post(`/bookings/${id}`, booking);
    console.log(response.data)
    return response.data;
}


export const deleteBooking = async (id, bookingId) => {
    const response = await api.delete(`/bookings/${id}/${bookingId}`);
    console.log(response.data)
    return response.data;
}




