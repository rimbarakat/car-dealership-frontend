import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./booking-dates.css";

function Calendar({bookings}){
    console.log(bookings);
    bookings.forEach(booking => {
        if (booking.from === '9:00') {
            booking.from = '09:00';
        }
    });

    const events = bookings.map(booking => {
        let startDateTime = (`${booking.date}T${booking.from}:00`);
        const endDateTime = (`${booking.date}T${booking.to}:00`);
        return {
          title: `Booking ${booking._id}`,
          start: startDateTime,
          end: endDateTime,
          allDay: false,
        };
      });
    console.log(events)
    
    return (
        <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            events={events}
            eventDisplay="block"
            eventColor="#007bff"
            eventTextColor="#fff"
            headerToolbar={{
                left: "prev",
                center: "today,title",
                right:"next"
            }}
            eventOverlap={false}
            now={new Date()}
            views={
                {
                    timeGridWeek: {
                        titleFormat: { year: "numeric", month: "long", day: "numeric" },
                        slotLabelFormat: { hour: "numeric", minute: "2-digit", omitZeroMinute: false, meridiem: "short" },
                        slotDuration: "01:00:00",
                        slotLabelInterval: "01:00:00",
                        slotEventOverlap: true,
                        expandRows:true,
                        slotMinTime: "09:00:00",
                        slotMaxTime: "19:00:00",
                        allDaySlot: false,
                        nowIndicator: true,
                        weekends: false,
                        editable: true,
                        selectable: false,
                        selectMirror: true,
                        dayMaxEvents: true,
                        events: events,
                    }
            }
        }/>
    ); 
}
export default Calendar;
