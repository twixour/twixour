import { createContext, useReducer } from "react";
import CourseReducer from "./CourseReducer";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const initialState = {
    courses: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(CourseReducer, initialState);

  const getCourses = async () => {
    setLoading();
    const response = await fetch(`/courses/`);
    const data = await response.json();
    dispatch({
      type: "GET_COURSES",
      payload: data,
    });
  };
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };
  return (
    <CourseContext.Provider
      value={{
        courses: state.courses,
        loading: state.loading,
        getCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
