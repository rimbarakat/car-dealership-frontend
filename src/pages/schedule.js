import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/schedule.css';

function RequestTestDrive() {
  const [date, setDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateClick = (date) => {
    if (!bookedDates.find(bookedDate => bookedDate.date.toDateString() === date.toDateString())) {
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

  const availableTimings = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar with Booking</h1>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={handleDateClick}
          tileDisabled={isBookedDay}
          tileClassName={isBookedDay}
        />
      </div>
      {selectedDate && (
        <div className='modal'>
          <h2>Select a Timing for {selectedDate.toDateString()}</h2>
          <ul>
            {availableTimings.map((time, index) => (
              <li key={index}>
                <button 
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
              {booking.date.toDateString()} at {booking.time}
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
