import Navbar from "../../General/Navbar";
import QuestionCard from "../QuestionCard/index";
import AnswerBox from "../AnswerBox";

const Detail = () => {
  return (
    <>
      <Navbar title="جزییات سوال" />
      <div className="mt-32">
        <QuestionCard />
        <AnswerBox />
      </div>
    </>
  );
};

export default Detail;
