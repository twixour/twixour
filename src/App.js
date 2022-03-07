import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CourseProvider } from "./Context/CourseContext";
import Home from "./Components/Home";
import CourseDetail from "./Components/CourseDetail";
import CoursesList from "./Components/CoursesList";
import Navigation from "./Components/Navigation/Navigation";

const App = () => {
  return (
    <CourseProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/courses/:name" element={<CourseDetail />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
};

export default App;
