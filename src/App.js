import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventsPage from "./components/Events";
import EventDetailsPage from "./components/EventDetailsPage"; // Create this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsPage />} />{" "}
        {/* Render EventsPage for the root route */}
        <Route path="/event-details/:eventId" element={<EventDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
