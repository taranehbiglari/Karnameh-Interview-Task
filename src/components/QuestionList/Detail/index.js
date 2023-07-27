import Navbar from "../../General/Navbar";
import QuestionCard from "../QuestionCard/index";
import AnswerBox from "../AnswerBox";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getQuestionDetailsAction } from "../../../redux/Questions/Actions";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, data, failed } = useSelector((state) => state.Questions.details);

  useEffect(() => {
    if (id) {
      dispatch(getQuestionDetailsAction(id));
    }
  }, [id]);
  
  return (
    <>
      <Navbar title="جزییات سوال" />
      <div className="mt-32">
        <QuestionCard data={data} />
        <AnswerBox />
      </div>
    </>
  );
};

export default Detail;
