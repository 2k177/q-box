import { useState } from "react";

const QuestionBox = ({ id, question }) => {
  const [isOpen, setOpen] = useState(false);
  const onOpenClick = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <section>
      <div className={isOpen ? "open" : "closed"}>
        <h4>{question.title}</h4>
        <button onClick={onOpenClick}>{isOpen ? "-" : "+"} </button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
};
export default QuestionBox;
