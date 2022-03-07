import React from "react";
import { Link } from "react-router-dom";
import CourseDetail from "./CourseDetail";

const CourseItem = ({ course }) => {
  return (
    <div className="border-cyan-300 border shadow-lg">
      <div className=" bg-gradient-to-r from-cyan-400 via-cyan-700 to-cyan-400 shadow-lg ">
        <h1 className="text-3xl text-center font-extrabold text-white py-10 px-3">
          {course.name}
        </h1>
      </div>
      <div>
        <Link
          className="border-b-2 text-gray-600 "
          to={`${course.name.split(" ").join("")}`}
          state={{ course }}
        >
          <div className=" border-cyan-300 font-bold border ml-5 mt-2 mr-5 text-center  py-2 duration-300">
            {course.name}
          </div>
        </Link>
        <div className="text-center px-3 font-extralight py-8 duration-300">
          {course.about}
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
