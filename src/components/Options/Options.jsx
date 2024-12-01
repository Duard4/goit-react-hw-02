import css from "./Options.module.css";
const Options = ({ onFeedback, onReset, resetBtn }) => {
    return (
        <div className={css.options}>
            <button
                type="button"
                className={css.good}
                onClick={() => onFeedback("good")}
            >
                Good
            </button>
            <button
                type="button"
                className={css.neutral}
                onClick={() => onFeedback("neutral")}
            >
                Neutral
            </button>
            <button
                type="button"
                className={css.bad}
                onClick={() => onFeedback("bad")}
            >
                Bad
            </button>
            {resetBtn && (
                <button
                    type="button"
                    className={css.reset}
                    onClick={() => onReset()}
                >
                    Reset
                </button>
            )}
        </div>
    );
};

export default Options;
