const Feedback = ({ reviews, partPos }) => {
    const { good, neutral, bad } = reviews;
    const totalFeedback = good + neutral + bad;

    return (
        <>
            <ul>
                <li>Good: {reviews.good}</li>
                <li>Neutral: {reviews.neutral}</li>
                <li>Bad: {reviews.bad}</li>
                <li>Total: {totalFeedback}</li>
                <li>Positive: {partPos}%</li>
            </ul>
        </>
    );
};

export default Feedback;
