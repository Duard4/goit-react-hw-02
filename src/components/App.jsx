import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

export default function App() {
    const [reviews, setReviews] = useState(() => {
        const savedReviews = window.localStorage.getItem("reviews");
        return savedReviews
            ? JSON.parse(savedReviews)
            : { good: 0, neutral: 0, bad: 0 };
    });

    const resetReviews = () => {
        const initialReviews = { good: 0, neutral: 0, bad: 0 };
        setReviews(initialReviews);
        window.localStorage.setItem("reviews", JSON.stringify(initialReviews));
    };

    const updateFeedback = (feedbackType) => {
        setReviews((prevReviews) => {
            const updatedReviews = {
                ...prevReviews,
                [feedbackType]: prevReviews[feedbackType] + 1,
            };
            window.localStorage.setItem(
                "reviews",
                JSON.stringify(updatedReviews)
            );
            return updatedReviews;
        });
    };

    const isEmpty = reviews.good + reviews.neutral + reviews.bad === 0;

    return (
        <>
            <Description />
            <Options
                onFeedback={updateFeedback}
                onReset={resetReviews}
                resetBtn={!isEmpty}
            />
            <Feedback reviews={reviews} />
        </>
    );
}
