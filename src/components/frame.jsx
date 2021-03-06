import React from 'react';
import PropTypes from 'prop-types';
import Screen from './screen';
import Button from './button';

class Frame extends React.Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="calculator-title">calculator</div>
            <Screen question={this.state.question} answer={this.state.answer} />
            <div className="button-row">
              <Button label={'1'} handleClick={this.handleClick} type="input" />
              <Button label={'2'} handleClick={this.handleClick} type="input" />
              <Button label={'3'} handleClick={this.handleClick} type="input" />
              <Button label={'4'} handleClick={this.handleClick} type="input" />
              <Button
                label={'-'}
                handleClick={this.handleClick}
                type="action"
              />
              <Button
                label={'+'}
                handleClick={this.handleClick}
                type="action"
              />
            </div>
            <div className="button-row">
              <Button label={'5'} handleClick={this.handleClick} type="input" />
              <Button label={'6'} handleClick={this.handleClick} type="input" />
              <Button label={'7'} handleClick={this.handleClick} type="input" />
              <Button label={'8'} handleClick={this.handleClick} type="input" />
              <Button
                label={'*'}
                handleClick={this.handleClick}
                type="action"
              />
              <Button
                label={'/'}
                handleClick={this.handleClick}
                type="action"
              />
            </div>
            <div className="button-row">
              <Button label={'9'} handleClick={this.handleClick} type="input" />
              <Button label={'.'} handleClick={this.handleClick} type="input" />
              <Button label={'0'} handleClick={this.handleClick} type="input" />
              <Button
                label={'C'}
                handleClick={this.handleClick}
                type="action"
              />
              <Button
                className="buton1"
                label={'='}
                handleClick={this.handleClick}
                type="action"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case '=': {
        const answer = eval(this.state.question).toString();
        this.setState({ answer });
        break;
      }
      case 'C': {
        this.setState({ question: '', answer: '' });
        break;
      }
      default: {
        this.setState({ question: (this.state.question += value) });
        break;
      }
    }
  }
}

export default Frame;
