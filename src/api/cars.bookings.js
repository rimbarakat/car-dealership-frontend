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
    return response.data[0].timeSlots;
}



