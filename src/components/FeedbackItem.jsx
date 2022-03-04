import Card from "./shared/Card";

const FeedbackItem = (props) => {

  return ( 
    <Card>
      <div className="num-display">{props.rating}</div>
      <div className="text-display">{props.text}</div>  
    </Card>
  );
};

export default FeedbackItem;
