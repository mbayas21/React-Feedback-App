import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import { useState } from "react";
import "./data/FeedbackData";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="Hello World" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
