import React from 'react';
import { getAllBookings } from '../api/allbookings';
import { useQuery } from "react-query";


function AllBookings() {
    const { data, error, isLoading } = useQuery(["getAllBookings"],getAllBookings);
  console.log(data);
  return (
    <div>all bookings</div>
  );
}

export default AllBookings;

