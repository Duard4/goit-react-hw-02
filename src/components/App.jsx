import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

export default function App() {
    const [reviews, setReviews] = useState(() => {
        const savedReviews = window.localStorage.getItem("reviews");
        if (savedReviews) return JSON.parse(savedReviews);

        return {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    });

    const updateFeedback = (feedbackType) => {
        setReviews({
            ...reviews,
            [feedbackType]: reviews[feedbackType] + 1,
        });
    };

    useEffect(() => {
        window.localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);

    return (
        <>
            <Description></Description>
            <Options onFeedback={updateFeedback}></Options>
            <Feedback reviews={reviews}></Feedback>
        </>
    );
}
