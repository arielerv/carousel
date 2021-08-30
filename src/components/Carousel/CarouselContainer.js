import {connect} from 'react-redux';

import {setSelectedDisc} from '../../store/discs/actions';

import Carousel from './Carousel';

const mapDispatchToProps = dispatch => ({
  setDisc: selectedDisc => dispatch(setSelectedDisc(selectedDisc)),
});

export default connect(null, mapDispatchToProps)(Carousel);
