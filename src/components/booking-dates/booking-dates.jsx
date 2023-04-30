import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import DeleteDialog from "./delete-dialog";
import {deleteBooking} from "../../api/cars.bookings";
import "./booking-dates.css";

function Calendar({bookings, carID, onBookingDeleted}){
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [bookingId, setBookingId] = useState(null);
    bookings.forEach(booking => {
        if (booking.from === '9:00') {
            booking.from = '09:00';
        }
    });
    
    console.log(bookings);
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
    
    function handleEventClick(info) {
        const bookingId = info.event.title.split(" ")[1]; // Extract the booking ID from the event title
        setBookingId(bookingId);

        setDeleteDialogOpen(true);
      }

    async function onDeleteBooking(bookingId) {
        try {
            await deleteBooking(carID, bookingId);
            setDeleteDialogOpen(false);
            onBookingDeleted();
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div>
        <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            events={events}
            eventClick={handleEventClick}
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
        <DeleteDialog
            open={deleteDialogOpen}
            onClose={() => setDeleteDialogOpen(false)}
            onDelete={() => onDeleteBooking(bookingId)}
        />
        </div>
        

    ); 
}

export default Calendar;
