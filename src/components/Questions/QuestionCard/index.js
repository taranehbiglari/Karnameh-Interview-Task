import style from "./style.module.scss";
import profile from "../../../assets/images/images.png"

const QuestionCard = () => {
  return (
    <>
      <div
        className={`${style.card}max-w overflow-hidden shadow border mx-10 my-5 rounded-lg`}
      >
        <div className="flex justify-between items-center bg-white py-2 px-4 shadow-sm rounded-lg">
          <div className="flex items-center">
            <img src={profile} className="rounded-lg ml-3 item" alt="user-profile" width="32" height="32" />
            <h1 className="text-base bont-bold">مشکل در Auth در React</h1>
          </div>
          <h1>details</h1>
        </div>
        <p className="p-4 text-sm font-normal">
          سلام من میخوام یه authentication ساده تو react بسازم اما این error رو
          بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که
          ببینید دقیقا چه مشکلی وجود داره
        </p>
        <button className="bg-transparent float-left m-4 text-xs hover:bg-green-500 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          مشاهده جزییات
        </button>
      </div>
    </>
  );
};

export default QuestionCard;
