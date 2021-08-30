import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {Container, Title, Wrapper} from './styled';
import {Carousel} from '../../components';

const Home = ({discs, getDiscs, selectedDisc}) => {
  useEffect(() => {
    getDiscs();
  }, [getDiscs]);

  return (
    <Container>
      <Wrapper colors={['dimgrey', 'black']}>
        <Title>{`Example Carousel - Selected: ${selectedDisc}`}</Title>
      </Wrapper>
      <Carousel images={discs.map(disc => disc.image)} />
    </Container>
  );
};

Home.propTypes = {
  discs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  getDiscs: PropTypes.func.isRequired,
  selectedDisc: PropTypes.number,
};

Home.defaultProps = {
  selectedDisc: 1,
};

export default Home;
