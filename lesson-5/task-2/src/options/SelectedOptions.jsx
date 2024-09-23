import { connect } from 'react-redux';
import { selectedOpionsSelector } from './options.selectors';
import Options from './Options';
import { togleOption } from './options.actions';

const mapState = state => ({
  options: selectedOpionsSelector(state),
});

const mapDispatch = {
  moveOptions: togleOption,
};

export default connect(mapState, mapDispatch)(Options);
