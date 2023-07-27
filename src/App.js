import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import Questions from "./pages/Questions";
import Question from "./pages/Question";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/questions/:id" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
