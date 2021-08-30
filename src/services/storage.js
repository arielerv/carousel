import {AsyncStorage} from 'react-native';

export const setSelectedDisc = selectedDisc => {
  return AsyncStorage.setItem('selectedDisc', selectedDisc);
};
