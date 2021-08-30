import {connect} from 'react-redux';

import {getDiscsRequest} from '../../store/discs/actions';
import {getDiscs, getSelectedDiscs} from '../../store/discs/selectors';

import Home from './Home';

const mapStateToProps = state => ({
  discs: getDiscs(state),
  selectedDisc: getSelectedDiscs(state),
});

const mapDispatchToProps = dispatch => ({
  getDiscs: () => dispatch(getDiscsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
