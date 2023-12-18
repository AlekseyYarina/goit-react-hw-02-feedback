import { Component } from 'react';
import { FeedbackOptions } from './feedback/feedback';
import { Statistics } from './statistic/statistic';
import { Section } from './section/section';
import { Notifacation } from './notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handleClickNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handleClickBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  getTotal = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, curr) => acc + curr, 0);
  };
  getPositiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    if (totalFeedback === 0) {
      return 0;
    }
    const positiveFeedbackPercentage = (good / totalFeedback) * 100;
    return parseFloat(positiveFeedbackPercentage.toFixed(0));
  };

  render() {
    const totalFeedback = this.getTotal();
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            handleClickGood={this.handleClickGood}
            handleClickNeutral={this.handleClickNeutral}
            handleClickBad={this.handleClickBad}
          />
        </Section>

        {totalFeedback > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={this.getPositiveFeedback()}
            />
          </Section>
        ) : (
          <Notifacation message="No feedback yet" />
        )}
      </div>
    );
  }
}
