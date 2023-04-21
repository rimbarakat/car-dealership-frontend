import { useState } from 'react';
import { useEffect } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getCarBookings, sendBooking } from "../api/cars.bookings";
import { getCar } from "../api/car.details";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import '../css/schedule.css';

function RequestTestDrive() {
  const [date, setDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const { id } = useParams();
  const { data} = useQuery(["getCar", id], getCar);
  
  const handleDateClick = async (date) => {
    if (!bookedDates.find(bookedDate => bookedDate.date.toDateString() === date.toDateString()) && date >= new Date()) {
      setSelectedDate(date);
      const slots = await getCarBookings(id, date);
      console.log(slots)
      setTimeSlots(slots);
    }
  };

  

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  //function that take time in the following from 18:00 and return the nex time 19:00
  const getNextTime = (time) => {
    const [hours, minutes] = time.split(':');
    const nextHours = parseInt(hours) + 1;
    return `${nextHours}:00`;
  };


  const handleConfirmClick = () => {
    setBookedDates([...bookedDates, { date: selectedDate, time: selectedTime }]);
    const from = selectedTime
    const to = getNextTime(selectedTime)
    const send = sendBooking(id, from, to, selectedDate);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const isBookedDay = ({ date, view }) => {
    return (
      view === 'month' && 
      bookedDates.find(bookedDate => bookedDate.date.toDateString() === date.toDateString())
    );
  };

  const isBookedTime = (time) => {
    return (
      bookedDates.find(bookedDate => {
        return (
          bookedDate.date.toDateString() === selectedDate.toDateString() && 
          bookedDate.time === time
        );
      })
    );
  };


  const today = new Date();
  const todayIndex = [0, 1, 2, 3, 4, 5, 6].findIndex(i => date.toLocaleDateString() === new Date(today.getFullYear(), today.getMonth(), today.getDate() + i).toLocaleDateString());

  return (
    <div className='app'>
      <div className='calendar-container'>
      <Calendar
          onChange={setDate}
          value={new Date(today.getFullYear(), today.getMonth(), today.getDate() + todayIndex)}
          onClickDay={handleDateClick}
          tileDisabled={({ date }) => 
            date < new Date() ||
            (date.getDay() === 6 && date > new Date(new Date().setHours(23,59,59,999))) ||
            (date.getDay() === 0 && date > new Date(new Date().setHours(23,59,59,999))) ||
            bookedDates.find(bookedDate => bookedDate.date.toDateString() === date.toDateString())
          }
          tileClassName={({ date }) => date < new Date() ? 'disabled-date' : isBookedDay({ date, view: 'month' }) ? 'booked-date' : ''}
        />
      </div>
      {selectedDate && (
        <div className='modal'>
        <h2>Select a Timing for {selectedDate.toDateString()}</h2>
        <ul>
          {timeSlots.map((slot, index) => {
            if (slot.isAvailable) {
              return (
                <li key={index}>
                  <button
                    className={selectedTime === slot.from ? 'active' : ''}
                    onClick={() => handleTimeClick(slot.from)}
                  >
                    {slot.from.split(':')[0]}-{slot.to.split(':')[0]}
                  </button>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <button
          className='confirm-button'
          disabled={!selectedTime}
          onClick={handleConfirmClick}
        >
          Confirm
        </button>
      </div>
      
      )}
      {bookedDates.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Booked Dates:</span>{' '}
          {bookedDates.map((booking, index) => (
            <span key={index}>
              {
booking.date.toDateString()} at {booking.time} {data.model} {data.year} {data.color} ID:{data._id}
              {index !== bookedDates.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      ) : (
        <p className='text-center'>No dates have been booked.</p>
      )}
    </div>
  );
}

export default RequestTestDrive;
