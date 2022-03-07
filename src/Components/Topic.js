import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  return (
    <div className=" transition ease-in-out bg-white  py-3 border-red-500 border hover:bg-red-400 duration-800 hover:text-white">
      <Link className="px-3 ml-3 py-3" to="">
        <span className="shadow-lg   px-2  py-3 font-extrabold">{topic}</span>
      </Link>
    </div>
  );
};

export default Topic;
