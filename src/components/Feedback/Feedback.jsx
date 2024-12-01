const Feedback = ({ reviews }) => {
    const { good, neutral, bad } = reviews;
    const totalFeedback = good + neutral + bad;
    const result = Math.round((good / totalFeedback) * 100);

    return (
        <>
            {totalFeedback ? (
                <ul>
                    <li>Good: {reviews.good}</li>
                    <li>Neutral: {reviews.neutral}</li>
                    <li>Bad: {reviews.bad}</li>
                    <li>Total: {totalFeedback}</li>
                    <li>Positive: {result}%</li>
                </ul>
            ) : (
                <p>No feedback yet</p>
            )}
        </>
    );
};

export default Feedback;
