import Question from "./Question";
import data from "../helper/data";

const InterviewAccord = () => {
  return (
    <div className="row">
      {data.map((item) => (
        <Question key={item.id} item={item} />
      ))}
    </div>
  );
};

export default InterviewAccord;
