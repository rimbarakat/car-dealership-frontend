import { useEffect, useState } from "react";
import { getSpecificCarBooking } from "../api/cars.bookings";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCar } from "../api/car.details";
import Calendar from "../components/booking-dates/booking-dates";
import "../css/CarBooking.css";
function CarBooking() {
  const [bookings, setBookings] = useState([]);
  const { id } = useParams();
  const { data } = useQuery(["getCar", id], getCar);
  useEffect(() => {
    const fetchBookings = async () => {
      const bookings = await getSpecificCarBooking(id);
      setBookings(bookings.bookings);
      console.log(bookings.bookings)
    }
    fetchBookings();
  }, [id]);
  

  
    console.log("Hel1")
    console.log(data)
    console.log("Hel2")

  

  return (
    <div>
      <h2>Bookings for Car {data.model}</h2>
      <div className="calendar1-container">
        <Calendar bookings={bookings} carID={id} />
      </div>
    </div>
  );
}

export default CarBooking;

