import Carousel from "./Carousel";
import CoursesList from "./CoursesList";
import Navigation from "./Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl text-cyan-600 font-extrabold text-center py-3">
        Twixour
      </h1>
      <Carousel />
    </div>
  );
};

export default Home;
