import "./App.css";
import QuestionBox from "./components/QuestionBox";
import questions from "./components/Questions";

function App() {
  return (
    <>
      <div className="container">
        <h2>FAQ/Accord</h2>
        <h2>Frequently Asked questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <QuestionBox key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
