import { useLocation } from "react-router-dom";
import Topic from "./Topic";
import Youtube from "./Youtube";

const CourseDetail = () => {
  const location = useLocation();
  const {
    course: {
      id,
      name,
      duration,
      link,
      structure,
      paymentType,
      installment,
      otp,
      monthly,
      cpw,
      mode,
    },
  } = location.state;

  return (
    <div className="px-8 py-8 mt-3 text-gray-600">
      <div className="shadow-lg border-cyan-300 border">
        <h1 className="text-3xl text-black font-extrabold text-center py-3">
          {name}
        </h1>
        <div className=" p-8">
          <Youtube embedId={link} />
        </div>
        <div className="px-5 py-4">
          <span className="font-extralight">duration: </span>
          <span className="font-extrabold">{duration}</span>
        </div>

        <div className=" px-5 py-4">
          <span className="font-extralight">structure: </span>
          <div className="grid grid-cols-2 gap-2 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 px-3 ">
            {structure.map((topic) => (
              <Topic topic={topic} />
            ))}
          </div>
        </div>

        <div className="px-5 py-4">
          <span className="font-extralight">paymentType: </span>
          <div className="grid grid-cols-2 gap-2 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 px-3 ">
            {paymentType.map((payment) => (
              <div>{payment}</div>
            ))}
          </div>
        </div>

        <div className="px-5 py-4">
          <span className="font-extralight">installment: </span>
          <span className="font-extrabold">&#8377; {installment}</span>
        </div>

        <div className="px-5 py-4">
          <span className="font-extralight">otp: </span>
          <span className="font-extrabold">&#8377;{otp}</span>
        </div>

        <div className="px-5 py-4">
          <span className="font-extralight">monthly: </span>
          <span className="font-extrabold">&#8377; {monthly}</span>
        </div>

        <div className="px-5 py-4">
          <span className="font-extralight">class per week: </span>
          <span className="font-extrabold">{cpw}</span>
        </div>

        <div className="px-5 py-4">
          <span className="font-extralight">mode: </span>
          <span className="font-extrabold">{mode}</span>
        </div>

        <div className="px-5 py-4">
          <span className="font-extralight">link: </span>
          <span className="font-extrabold">{link}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
