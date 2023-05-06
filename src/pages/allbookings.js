import React from 'react';
import { useQuery } from "react-query";
import { useState, useEffect } from 'react';
import { getAllBookings } from '../api/allbookings';
import { isAdmin } from '../utils';
import "../css/allbookings.css";
import { deleteBooking } from '../api/cars.bookings';
import { useMutation } from 'react-query';

function AllBookings() {
  const { data, error, isLoading,refetch } = useQuery(["getAllBookings"],getAllBookings);
  const [statisticsData, setStatisticsData] = useState({
    carsSold: { day: 0, month: 0, year: 0 },
    revenue: { day: 0, month: 0, year: 0 },
    users: 0,
    totalCars: 0,
  });

  // Fetch data for the statistics section from your API and update the `statisticsData` state.
  const fetchStatisticsData = async () => {
    // Fetch data from your API endpoints and update the state accordingly.
  };
  const deleteBookingMutation = useMutation(deleteBooking, {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      refetch();
    },
  });

  useEffect(() => {
    fetchStatisticsData();
  }, []);

  const handleDelete = async (bookingId, carId) => {
    deleteBookingMutation.mutate(carId, bookingId);
  }

  return (
    <div className="allbookings">
      <div className="statistics">
        <h2>Statistics</h2>
        <div className="stats-grid">
          <div>
            <h3>Cars Sold</h3>
            <p>Day: {statisticsData.carsSold.day}</p>
            <p>Month: {statisticsData.carsSold.month}</p>
            <p>Year: {statisticsData.carsSold.year}</p>
          </div>
          <div>
            <h3>Revenue</h3>
            <p>Day: {statisticsData.revenue.day}</p>
            <p>Month: {statisticsData.revenue.month}</p>
            <p>Year: {statisticsData.revenue.year}</p>
          </div>
          <div>
            <h3>Users</h3>
            <p>Total: {statisticsData.users}</p>
          </div>
          <div>
            <h3>Total Cars</h3>
            <p>In Dealership: {statisticsData.totalCars}</p>
            <p>Sold: {statisticsData.carsSold.year}</p>
          </div>
        </div>
      </div>
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
