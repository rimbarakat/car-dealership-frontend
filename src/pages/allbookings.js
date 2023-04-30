import React from 'react';
import { useQuery } from "react-query";
import { getAllBookings } from '../api/allbookings';
import { isAdmin } from '../utils';
import "../css/allbookings.css";
import { deleteBooking } from '../api/cars.bookings';
import { useMutation } from 'react-query';

function AllBookings() {
  const { data, error, isLoading,refetch } = useQuery(["getAllBookings"],getAllBookings);
  const deleteBookingMutation = useMutation(deleteBooking, {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      refetch();
    },
  });
  const handleDelete = async (bookingId, carId) => {
    deleteBookingMutation.mutate(carId, bookingId);
  }

  return (
    <div className="table-container-booking">
      <table className="booking-table">
        <thead>
          <tr>
            {isAdmin() && <th className='booking-th'>User Name</th>}
            <th className='booking-th'>Booking Date</th>
            <th className='booking-th'>Booking From</th>
            <th className='booking-th'>Booking To</th>
            <th className='booking-th'></th>
          </tr>
        </thead>
        <tbody>
          {isLoading && <tr><td className='booking-td' colSpan="5">Loading...</td></tr>}
          {error && <tr><td className='booking-td' colSpan="5">Error: {error.message}</td></tr>}
          {data && data.map(booking => (
            <tr key={booking.bookingId}>
              {isAdmin() && <td className='booking-td'>{booking.userFullName}</td>}
              <td className='booking-td'>{booking.bookingDate}</td>
              <td className='booking-td'>{booking.bookingFrom}</td>
              <td className='booking-td'>{booking.bookingTo}</td>
              <td className='booking-td'><button className="delete-button" onClick={() => handleDelete(booking.bookingId, booking.carId)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBookings;
