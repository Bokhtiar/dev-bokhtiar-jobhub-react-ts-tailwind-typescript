export const Contact = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <h3 className="text-4xl text-center my-20 text-2xl font-bold">Get In Touch</h3>
      <img
        className=" h-96 rounded w-full my-4"
        src="https://as1.ftcdn.net/v2/jpg/00/81/36/78/1000_F_81367868_dxsWEq2eH4FDClL8fqP0Lph2IPU0ftK9.jpg"
        alt=""
      />
      <div className="my-12">
        <div className="px-72">
          <form action="" className="shadow-md">
            <div className="text-center">
            
            </div>
            <div className="m-4 p-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
                  Enter your name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="type here name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
                  Enter your email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="type here email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl">
                  Enter your message
                </label>
                <textarea
                  placeholder="type here message"
                  className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name=""
                  id=""
                ></textarea>
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
        {/* <div className=" my-auto shadow-md py-8">
          <div className="mx-8">
            <p className="text-2xl">
              <span className="material-symbols-outlined text-gray-600">
                mail
              </span>{" "}
              Test@gmail.com
            </p>
            <p className="text-2xl">
              {" "}
              <span className="material-symbols-outlined text-gray-600">
                phone_in_talk
              </span>{" "}
              20328342342343
            </p>
            <p className="text-2xl">
              <span className="material-symbols-outlined text-gray-600">
                pin_drop
              </span>{" "}
              dhaka bnagladesh
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
