import React from 'react';
import PropTypes from 'prop-types';
import {Animated, Dimensions, ScrollView} from 'react-native';

import {Container, Dots, Dot, WrapperDot, Image, Wrapper} from './styled';

const Carousel = ({images, setDisc}) => {
  const {width} = Dimensions.get('window');
  const counter = images.length;
  const dotWidth = 300 / counter - (counter - 1) * 10;
  const animated = new Animated.Value(0);
  const imagesArray = [];
  const dots = [];

  const handleScroll = e => {
    const selectedDisc = Math.ceil(e.nativeEvent.contentOffset.x / width) + 1;
    setDisc(selectedDisc);
  };

  images.forEach((image, index) => {
    imagesArray.push(
      <Wrapper width={width - 20}>
        <Image key={image} source={{uri: image}} />
      </Wrapper>,
    );

    const interpolate = animated.interpolate({
      inputRange: [width * (index - 1), width * (index + 1)],
      outputRange: [-dotWidth, dotWidth],
      extrapolate: 'clamp',
    });

    const dot = (
      <WrapperDot key={`bar${index}`} width={dotWidth}>
        <Dot
          width={dotWidth}
          style={[{transform: [{translateX: interpolate}]}]}
        />
      </WrapperDot>
    );
    dots.push(dot);
  });

  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={100}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: animated}}}],
          {useNativeDriver: false, listener: handleScroll},
        )}>
        {imagesArray}
      </ScrollView>
      <Dots>{dots}</Dots>
    </Container>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  setDisc: PropTypes.func.isRequired,
};

export default Carousel;
