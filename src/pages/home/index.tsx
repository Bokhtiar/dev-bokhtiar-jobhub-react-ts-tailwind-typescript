import { Link } from "react-router-dom";

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
        <section>
          <h2 className="text-center text-4xl">Featured Jobs</h2>
          <div className="flex shadow-md p-8">
            <div className="flex-auto-16 m-4">
              <img
                src="https://preview.colorlib.com/theme/jobfinderportal/assets/img/icon/job-list2.png"
                alt=""
              />
            </div>
            <div className="flex-auto w-64 ml-8 m-4">
              <h2 className="text-2xl">Digital Marketing</h2>
              <div className="flex">
                <div className="flex-auto w-14">compnay name</div>

                <div className="flex-auto w-14">company location</div>

                <div className="flex-auto w-14">salary 400$-600$</div>
              </div>
            </div>
            <div className="flex-auto w-8 m-4 text-center">
              <button className="rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
                Full time
              </button>
              <br />
              <span className="mt-8">7hours</span>
            </div>
          </div>

          <div className="flex shadow-md p-8">
            <div className="flex-auto-16 m-4">
              <img
                src="https://preview.colorlib.com/theme/jobfinderportal/assets/img/icon/job-list2.png"
                alt=""
              />
            </div>
            <div className="flex-auto w-64 ml-8 m-4">
              <h2 className="text-2xl">Digital Marketing</h2>
              <div className="flex">
                <div className="flex-auto w-14">compnay name</div>

                <div className="flex-auto w-14">company location</div>

                <div className="flex-auto w-14">salary 400$-600$</div>
              </div>
            </div>
            <div className="flex-auto w-8 m-4 text-center">
              <button className="rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
                Full time
              </button>
              <br />
              <span className="mt-8">7hours</span>
            </div>
          </div>

          <div className="flex shadow-md p-8">
            <div className="flex-auto-16 m-4">
              <img
                src="https://preview.colorlib.com/theme/jobfinderportal/assets/img/icon/job-list2.png"
                alt=""
              />
            </div>
            <div className="flex-auto w-64 ml-8 m-4">
              <h2 className="text-2xl">Digital Marketing</h2>
              <div className="flex">
                <div className="flex-auto w-14">compnay name</div>

                <div className="flex-auto w-14">company location</div>

                <div className="flex-auto w-14">salary 400$-600$</div>
              </div>
            </div>
            <div className="flex-auto w-8 m-4 text-center">
              <button className="rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
                Full time
              </button>
              <br />
              <span className="mt-8">7hours</span>
            </div>
          </div>

          <div className="flex shadow-md p-8">
            <div className="flex-auto-16 m-4">
              <img
                src="https://preview.colorlib.com/theme/jobfinderportal/assets/img/icon/job-list2.png"
                alt=""
              />
            </div>
            <div className="flex-auto w-64 ml-8 m-4">
              <h2 className="text-2xl">Digital Marketing</h2>
              <div className="flex">
                <div className="flex-auto w-14">compnay name</div>

                <div className="flex-auto w-14">company location</div>

                <div className="flex-auto w-14">salary 400$-600$</div>
              </div>
            </div>
            <div className="flex-auto w-8 m-4 text-center">
              <button className="rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
                Full time
              </button>
              <br />
              <span className="mt-8">7hours</span>
            </div>
          </div>

          <div className="text-center my-4">
            <button className="rounded-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
              Load more...
            </button>
          </div>
        </section>

        {/* about us */}
        <div className="grid grid-cols-2 my-16">
          <div className="bg-gray-100">
            <div className="py-8 m-4">
              <h2 className="text-blue-600 text-lg">WHO WE ARE</h2>
              <h4 className="text-2xl text-orange-600">
                Expedita voluptas omnis cupiditate totam eveniet nobis sint
                iste. Dolores est repellat corrupti reprehenderit.
              </h4>
              <p className="py-2">
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                et. Inventore et et dolor consequatur itaque ut voluptate sed
                et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                corrupti.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/about.jpg"
              className="rounded-lg w-screen max-h-96 py-12 "
              alt="..."
            />
          </div>
        </div>

        {/* contact */}
        <h3 className="text-4xl text-center">Get In Touch</h3>
        <img className="h-72 w-full my-4" src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" />
        <div className="grid grid-cols-2">
          <div className="cols-span-2">
            <form action="" className="shadow-md">
              <div className="m-4 p-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Enter your name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="type here name" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Enter your email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="type here email" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Enter your message
                  </label>
                  <textarea placeholder="type here message" className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="" id="" ></textarea>
                  
                </div>

              <div className="text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Send Message
                </button>
              </div>
              </div>
            </form>
          </div>
          {/* contact info */}
          <div className="text-center my-auto shadow-md py-8">
            <div className="my-4">
            <p className="text-2xl">Email: Test@gmail.com</p>
             <p className="text-2xl">Contact : 20328342342343</p>
             <p className="text-2xl">Location: dhaka bnagladesh</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
