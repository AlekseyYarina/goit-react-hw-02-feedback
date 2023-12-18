import css from './feedback.module.css';

export const FeedbackOptions = ({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
}) => {
  return (
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
  );
};
