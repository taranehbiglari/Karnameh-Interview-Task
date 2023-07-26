import Navbar from "../General/Navbar";
import QuestionCard from "./QuestionCard";
import { getAll } from "../../redux/Questions/Actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Questions: any = () => {
  const { list } = useSelector((state: any) => state.questions);
  console.log(list, "list");
  const dispatch: any = useDispatch();
  const getData = () => {
    dispatch(getAll());
  };
  useEffect(() => getData(), []);
  return (
    <>
      <Navbar title="لیست سوالات" />
      {/* <div className="mt-32">
        <div className="d-flex justify-center flex-column">
          {items.map((question: any) => (
            <div key={question.id}>
              {question}
            </div>
          ))}
        </div>
        <QuestionCard />
      </div> */}
    </>
  );
};

export default Questions;
