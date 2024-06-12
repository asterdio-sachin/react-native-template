import {StyleSheet} from 'react-native';

import colors from '@helpers/colors';

export default StyleSheet.create({
  h1: {
    fontSize: 52,
    fontFamily: 'Outfit-Bold',
  },
  h2: {
    fontSize: 29,
    fontFamily: 'Outfit-Bold',
  },
  h3: {
    fontSize: 23,
    fontFamily: 'Outfit-Bold',
  },
  h4: {
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
  },
  h5: {
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
  },
  h6: {
    fontSize: 16,
    fontFamily: 'Outfit-Bold',
  },
  h7: {
    fontSize: 14,
    fontFamily: 'Outfit-Bold',
  },
  b1: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
  },
  b2: {
    fontSize: 13,
    fontFamily: 'Outfit-Regular',
  },
  b3: {
    fontSize: 11,
    fontFamily: 'Outfit-Regular',
  },
  button: {
    fontSize: 12,
    fontFamily: 'Outfit-Bold',
    textTransform: 'uppercase',
  },
  overline: {
    fontSize: 10,
    fontFamily: 'Outfit-Bold',
    textTransform: 'uppercase',
  },
  primaryButton: {
    borderRadius: 100,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  secondaryButton: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.buttonBorder,
  },
  shadow: {
    elevation: 7,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 3,
    shadowOpacity: 0.05,
  },
  shadowTop: {
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
