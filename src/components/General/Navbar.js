import react, { useState } from "react";
import Modal from "./Modal";

const Navbar = (prop) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center py-5 px-10 bg-white border-b border-slate-200 absolute w-full top-0">
        <h1 className="font-extrabold text-2xl">{prop.title}</h1>
        <button
          onClick={togglePopup}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-7 rounded-md text-xs flex items-center"
        >
          <span className="text-xl pl-2">+</span>سوال جدید
        </button>
        {isOpen && (
          <Modal
            content={
              <>
                <div>
                  <b>ایجاد سوال جدید</b>
                  <div class="my-10">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      موضوع
                    </label>
                    <input
                      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="موضوع سوال را وارد کنید..."
                    ></input>
                  </div>
                  <div class="my-10">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      متن سوال
                    </label>
                    <input
                      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="username"
                      type="text"
                      placeholder="متن سوال را وارد کنید..."
                    ></input>
                  </div>
                  <div class="float-left">
                    <button
                      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      ایجاد سوال
                    </button>
                  </div>
                </div>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
