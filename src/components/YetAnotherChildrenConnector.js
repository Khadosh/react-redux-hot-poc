import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YetAnotherChildren from './YetAnotherChildren';
import { startIncrementSecondCount } from '../redux/secondCounter/secondCounter.actions';

const mapStateToProps = ({ SecondCounter }) => ({
  secondCount: SecondCounter.secondCount
});

const mapDispatchToProps = dispatch => ({
  secondCounterActions: bindActionCreators({ startIncrementSecondCount }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(YetAnotherChildren);