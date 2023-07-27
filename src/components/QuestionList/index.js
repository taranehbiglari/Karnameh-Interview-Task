import Navbar from "../General/Navbar";
import QuestionCard from "./QuestionCard";
import { getAll } from "../../redux/Questions/Actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const QuestionList= () => {
  const { list: { loading, data, failed } } = useSelector(state => state.Questions);
  const dispatch= useDispatch();
  const getData = () => {
    dispatch(getAll());
  };
  useEffect(() => getData(), []);
  

  return (
    <>
      <Navbar title="لیست سوالات" />
      {loading ? (
        <div>loading ...</div>
      ) : (
        <div className="mt-32">
        <div className="d-flex justify-center flex-column">
          {data.map((question) => (
            <div key={question.id}>
              <QuestionCard isList={true} data={question} />
            </div>
          ))}
        </div>
      </div>
      )}
    </>
  );
};

export default QuestionList;
