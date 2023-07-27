import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitNewQuestionAction } from "../../../redux/Questions/Actions";
const CreateQuestion = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const submitFormhandler = () => {
    if (!title) {
      console.log("عنوان سوال الزامیست");
      return null;
    }
    if (!question) {
      console.log("متن سوال الزامیست");
      return null;
    }
    const data = {
      title,
      question,
    };
    dispatch(submitNewQuestionAction(data));
  };
  return (
    <>
      <div>
        <h1 className="font-extrabold text-xl mb-10">ایجاد سوال جدید</h1>
        <form>
          <div>
            <label>موضوع</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>متن سوال</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <button onClick={submitFormhandler} className="mt-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-7 rounded-md text-xs flex items-center">
            ایجاد سوال
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateQuestion;
