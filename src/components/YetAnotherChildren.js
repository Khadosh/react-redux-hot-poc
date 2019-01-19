import React from 'react';
import PropTypes from 'prop-types';

class YetAnotherChildren extends React.Component {
  constructor(props) {
    super(props);
    this.props.secondCounterActions.startIncrementSecondCount();
  }
  render() {
    return (
      <div>{ `Another Children - Redux State - Seconds without reload: ${ this.props.secondCount }`}</div>
    );
  }
};

YetAnotherChildren.propTypes = {
  secondCount: PropTypes.number.isRequired,
  secondCounterActions: PropTypes.shape({
    startIncrementSecondCount: PropTypes.func
  }).isRequired
};

export default YetAnotherChildren;
