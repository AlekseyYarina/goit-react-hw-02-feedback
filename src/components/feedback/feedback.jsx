import css from './feedback.module.css';

export const Feedback = ({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
}) => {
  return (
    <div className={css.feedback}>
      <h2 className={css.feedbackTitle}>Please leave feedback</h2>
      <div className={css.feedbackBtns}>
        <button type="button" onClick={() => handleClickGood()}>
          Good
        </button>
        <button type="button" onClick={() => handleClickNeutral()}>
          Neutral
        </button>
        <button type="button" onClick={() => handleClickBad()}>
          Bad
        </button>
      </div>
    </div>
  );
};
