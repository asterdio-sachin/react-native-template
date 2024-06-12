import {Dimensions, Platform} from 'react-native';

export const {height: screenHeight, width: screenWidth} =
  Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';
