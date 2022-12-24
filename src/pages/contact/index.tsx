export const Contact = () => {
    return (
        <div>
               <h3 className="text-4xl text-center">Get In Touch</h3>
        <img className="h-72 w-full my-4" src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" />
        <div className="grid grid-cols-2">
          <div className="cols-span-2">
            <form action="" className="shadow-md">
              <div className="m-4 p-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-xl" >
                    Enter your name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="type here name" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-xl" >
                    Enter your email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="type here email" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-xl" >
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
          <div className=" my-auto shadow-md py-8">
            <div className="mx-8">
            <p className="text-2xl"><span className="material-symbols-outlined text-gray-600">mail</span> Test@gmail.com</p>
             <p className="text-2xl"> <span className="material-symbols-outlined text-gray-600">phone_in_talk</span> 20328342342343</p>
             <p className="text-2xl"><span className="material-symbols-outlined text-gray-600">pin_drop</span> dhaka bnagladesh</p>
            </div>
          </div>
        </div>
        </div>
    )
}