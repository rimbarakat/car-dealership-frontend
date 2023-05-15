import React from 'react';
import { useQuery } from "react-query";
import { useState, useEffect } from 'react';
import { getAllBookings } from '../api/allbookings';
import { isAdmin } from '../utils';
import "../css/allbookings.css";
import { deleteBooking } from '../api/cars.bookings';
import { useMutation } from 'react-query';
import { getStats } from '../api/statistics';

function AllBookings() {
  const { data, error, isLoading,refetch } = useQuery(["getAllBookings"],getAllBookings);
  const [statData, setStatData] = useState(null);

  useEffect(() => {
    getStats().then(setStatData).catch(console.error);
  }, []);


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
    <div className="allbookings">
      {statData && (
  <div className="statistics-container">
    <h2 className="statistics-title">Statistics</h2>
    <div className="stats-grid">
      <div className="stats-item">
        <h3>Cars Sold</h3>
        <p>Day: {statData.nbCarsSoldDay}</p>
        <p>Month: {statData.nbCarsSoldMonth}</p>
        <p>Year: {statData.nbCarsSoldYear}</p>
      </div>
      <div className="stats-item">
        <h3>Revenue</h3>
        <p>Day: {statData.revenueDay}</p>
        <p>Month: {statData.revenueMonth}</p>
        <p>Year: {statData.revenueYear}</p>
      </div>
      <div className="stats-item">
        <h3>Users</h3>
        <p>Total: {statData.nbUsersTotal}</p>
      </div>
      <div className="stats-item">
        <h3>Total Cars</h3>
        <p>In Dealership: {statData.nbCarsRemaining}</p>
        <p>Sold: {statData.nbCarsSold}</p>
      </div>
    </div>
  </div>
)}


    <div className="table-container-booking">
      <table className="booking-table">
        <thead>
          <tr>
            {isAdmin() && <th className='booking-th'>User Name</th>}
            <th className='booking-th'>Car Model</th>
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
              <td className='booking-td'>{booking.model}</td>
              <td className='booking-td'>{booking.bookingDate}</td>
              <td className='booking-td'>{booking.bookingFrom}</td>
              <td className='booking-td'>{booking.bookingTo}</td>
              <td className='booking-td'><button className="delete-button" onClick={() => handleDelete(booking.bookingId, booking.carId)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AllBookings;
