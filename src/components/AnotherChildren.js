import React from 'react';
import PropTypes from 'prop-types';

class AnotherChildren extends React.Component {
  constructor(props) {
    super(props);
    this.props.counterActions.startIncrementCount();
  }
  render() {
    return (
      <div>{ `Another Children - Redux State - Seconds without reload: ${ this.props.count }`}</div>
    );
  }
};

AnotherChildren.propTypes = {
  count: PropTypes.number.isRequired,
  counterActions: PropTypes.shape({
    startIncrementCount: PropTypes.func
  }).isRequired
};

export default AnotherChildren;
