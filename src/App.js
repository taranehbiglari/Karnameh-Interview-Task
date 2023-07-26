import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import Questions from "./pages/Questions";
import QuestionDetails from "./pages/QuestionDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/question-details" element={<QuestionDetails />} />
      </Routes>
    </div>
  );
}

export default App;
