import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CourseProvider } from "./Context/CourseContext";
import Home from "./Components/Home";
import CourseDetail from "./Components/CourseDetail";
import CoursesList from "./Components/CoursesList";
import Navigation from "./Components/Navigation/Navigation";
import AboutUs from "./Components/AboutUs";
import ByStudents from "./Components/ByStudents";
import ContactUs from "./Components/ContactUs";

const App = () => {
  return (
    <CourseProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/courses/:name" element={<CourseDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/byStudents" element={<ByStudents />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
};

export default App;
