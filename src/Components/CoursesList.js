import { useContext, useEffect } from "react";
import CourseContext from "../Context/CourseContext";
import Spinner from "./Spinner";
import CourseItem from "./CourseItem";

const CoursesList = () => {
  const { courses, loading, getCourses } = useContext(CourseContext);
  useEffect(() => {
    getCourses();
  }, []);
  if (!loading) {
    return (
      <div>
        <h1 className="text-2xl text-center font-extrabold py-5">
          What we offer
        </h1>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 px-8">
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default CoursesList;
