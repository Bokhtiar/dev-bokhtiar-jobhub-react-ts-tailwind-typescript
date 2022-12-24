import { About } from "pages/about";
import { Link } from "react-router-dom";
import {Job} from "pages/job"
import { Contact } from "pages/contact";

export const Home = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 ">
        <div className="grid grid-cols-2 gap-1 my-40">
          <div>
            <h1 className="text-5xl	text-blue-600">
              We offer modern solutions for growing your business
            </h1>
            <p className="text-2xl my-6">
              We are team of talented designers making websites with Bootstrap
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Get Search job
            </button>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1159531985/photo/close-up-interviewer-interview-candidate-apply-for-job-at-meeting-room-in-office.jpg?s=612x612&w=0&k=20&c=_9OcLGXHbtUatH9wVDhlj_dQ8wUGXja1BfMjT2NFZvY="
              className="rounded-lg w-screen max-h-96"
              alt="..."
            />
          </div>
        </div>

        {/* jobs post list */}
        <Job></Job>

        {/* about us */}
        <About></About>

        {/* contact */}
        <Contact></Contact>

      </div>
    </div>
  );
};
