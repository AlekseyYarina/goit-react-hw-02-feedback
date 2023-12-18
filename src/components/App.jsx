import { Component } from 'react';
import { Feedback } from './feedback/feedback';
import { Statistics } from './statistic/statistic';

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

  render() {
    return (
      <div>
        <Feedback
          handleClickGood={this.handleClickGood}
          handleClickNeutral={this.handleClickNeutral}
          handleClickBad={this.handleClickBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
