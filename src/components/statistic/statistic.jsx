import css from './statistic.module.css';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <div className={css.statistic}>
      <h3 className={css.statisticTitle}>Statistics</h3>
      <div className={css.statisticResults}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </div>
  );
};
