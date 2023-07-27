import { useState } from "react";
import Modal from "../General/Modal";
import CreateQuestion from "../QuestionList/CreateForm";
const Navbar = (prop) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center py-5 px-10 bg-white border-b border-slate-200 absolute w-full top-0">
        <h1 className="font-extrabold text-2xl">{prop.title}</h1>
        <button onClick={() => setShowModal(true)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-7 rounded-md text-xs flex items-center">
          <span className="text-xl pl-2">+</span>سوال جدید
        </button>
      </div>
      <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
        <CreateQuestion />
      </Modal>
    </>
  );
};

export default Navbar;
