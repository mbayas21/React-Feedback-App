import FeedbackItem from "./FeedbackItem";
import PropTypes  from "prop-types";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback items yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem rating={item.rating} text={item.text} id={item.id} key={item.id} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}
export default FeedbackList;
