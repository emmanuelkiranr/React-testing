import React from "react";
import Basecard from "./Basecard";
// import Appointments from "./Appointments";
// import Availablestaff from "./Availablestaff";
import Patientcount from "./Patientcount";
import GlobalStyle from "./theme/globalStyle";

class App extends React.Component {
  render() {
    return (
      <div>
        <Basecard />
        {/* <GlobalStyle />
        <Patientcount />
        <Appointments />
        <Availablestaff /> */}
      </div>
    );
  }
}

export default App;
