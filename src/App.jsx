import React from "react";
import "./app.scss";
import SparkLineAdultChildren from "./components/AdultsChildrenSparkLine";
import VisitorsPerCountry from "./components/VisitorsPerCountry";
import VisitorsPerDay from "./components/VisitorsPerDay";

const App = () => {
  return (
    <div className="app">
      <VisitorsPerDay />
      <VisitorsPerCountry />
      <SparkLineAdultChildren />
    </div>
  );
};

export default App;
