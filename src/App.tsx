import { Routes, Route } from "react-router-dom";
import CreateEvent from "views/create-event";
import { createEventPageUrl } from "views/create-event/url";
import Event, { eventPageUrl } from "views/event";
import Home, { homePageUrl } from "views/home";

const App = () => (
  <Routes>
    <Route path={homePageUrl} element={<Home />} />
    <Route path={createEventPageUrl} element={<CreateEvent />} />
    <Route path={eventPageUrl} element={<Event />} />
  </Routes>
);

export default App;
