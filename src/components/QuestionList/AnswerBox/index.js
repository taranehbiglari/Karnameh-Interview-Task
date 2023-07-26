const AnswerBox = () => {
  return (
    <>
      <div className="p-10">
        <label className="font-extrabold text-2xl">پاسخ ها</label>
        <textarea
          id="message"
          rows={5}
          className="block mt-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="متن پاسخ..."
        ></textarea>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-7 rounded-md text-xs mt-10">
          ارسال پاسخ
        </button>
      </div>
    </>
  );
};

export default AnswerBox;
