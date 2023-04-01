import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getCar } from "../api/car.details";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import '../css/schedule.css';

function RequestTestDrive() {
  const [date, setDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { id } = useParams();
  const { data} = useQuery(["getCar", id], getCar);
  console.log(data);
  
  const handleDateClick = (date) => {
    if (!bookedDates.find(bookedDate => bookedDate.date.toDateString() === date.toDateString()) && date >= new Date()) {
      setSelectedDate(date);
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmClick = () => {
    setBookedDates([...bookedDates, { date: selectedDate, time: selectedTime }]);
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

  const availableTimings = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

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
            {availableTimings.map((time, index) => (
              <li key={index}>
                <button 
                  disabled={isBookedTime(time)}
                  className={selectedTime === time ? 'active' : ''}
                  onClick={() => handleTimeClick(time)}
                >
                  {time}
                </button>
              </li>
            ))}
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
