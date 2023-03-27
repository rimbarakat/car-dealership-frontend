import React, { useState } from "react";
import "../css/Forms.css";

const Appointments = () => {
  const [incomingAppointments, setIncomingAppointments] = useState([
    { id: 1, name: "John Doe", date: "2023-04-01", time: "10:00 AM", car: "Mercedes c250 black", carID: "2034" },
    { id: 2, name: "Jane Smith", date: "2023-04-03", time: "2:00 PM", car: "Mustang blue", carID: "2044"  },
  ]);

  const [confirmedAppointments, setConfirmedAppointments] = useState([
    { id: 3, name: "Bob Johnson", date: "2023-04-05", time: "9:00 AM", car: "Jeep Cheroke green", carID: "2344"  },
    { id: 4, name: "Sara Lee", date: "2023-04-06", time: "11:00 AM", car: "BMW i8 white", carID: "2384"},
  ]);

  return (
    <div className="appointments-container">
      <h2 className="appointments-heading">Incoming Appointments</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>car</th>
            <th>carID</th>
          </tr>
        </thead>
        <tbody>
          {incomingAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.name}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.car}</td>
              <td>{appointment.carID}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="appointments-heading">Confirmed Appointments</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>car</th>
            <th>carID</th>
          </tr>
        </thead>
        <tbody>
          {confirmedAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.name}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.car}</td>
              <td>{appointment.carID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
