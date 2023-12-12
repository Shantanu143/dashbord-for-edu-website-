// import React from 'react'

import { SideNavigation, MainContent } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <SideNavigation />
        <MainContent></MainContent>
      </Router>
    </>
  );
};

export default App;
