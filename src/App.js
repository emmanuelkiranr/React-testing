import React from "react";
import Appointments from "./Appointments";
import Availablestaff from "./Availablestaff";
import Patientcount from "./Patientcount";

function App() {
  // render() {
  return (
    <div>
      <Patientcount />
      <Appointments />
      <Availablestaff />
    </div>
  );
  // }
}

export default App;
