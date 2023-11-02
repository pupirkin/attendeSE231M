import React from "react";
import "./mainpage.css";
import Header from "../../components/header/Header";

function Mainpage() {
  return (
    <div className="Mainpage">
      <header className="header">
        <Header/>
      </header>
      <div className="contentMainpage">
        <h className="day">Day of week</h>
        <p className="date">Date</p>
        <table className="scheduleTable">
          <tr>
            <th></th>
          </tr>
          <tr>
            <td>Time</td>
            <td>Subject name</td>
            <td>Attendance</td>
          </tr>
          <tr>
            <td>Time</td>
            <td>Subject name</td>
            <td>Attendance</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Mainpage;