import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // Add feedback with JSON server
      // const addFeedback = (newFeedback) => {
      //   newFeedback.id = uuidv4();
      //   setFeedback([newFeedback, ...feedback]);
      // };
  // Add feedback item
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Delete feedback without JSON server
      // const deleteFeedback = (id) => {
      //   if (window.confirm("Are you sure you want to delete?")) {
      //     setFeedback(feedback.filter((item) => item.id !== id));
      //   }
      // };

  // Delete feedback item
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Edit feedback item
  const editFeedBack = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback item without JSON server
      // const updateFeedback = (id, updItem) => {
      //   setFeedback(
      //     feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
      //   );
      // };

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch (`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
  }
  

  return (
    <FeedbackContext.Provider
      value={{
        // functions
        feedback,
        feedbackEdit,
        isLoading,
        //
        deleteFeedback,
        addFeedback,
        editFeedBack,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
