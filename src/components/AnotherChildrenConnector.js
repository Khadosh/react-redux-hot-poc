import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AnotherChildren from './AnotherChildren';
import { startIncrementCount } from '../redux/counter/counter.actions';

const mapStateToProps = ({ Counter }) => ({
  count: Counter.count
});

const mapDispatchToProps = dispatch => ({
  counterActions: bindActionCreators({ startIncrementCount }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AnotherChildren);