import React, {FC} from 'react';
import {StyleSheet, TextProps} from 'react-native';
import {AnimatableProps, Text} from 'react-native-animatable';

import {colors, styles as gStyles} from '@src/helpers';

interface ErrorProps extends TextProps, AnimatableProps<{}> {
  errorMessage: string;
}

const ErrorMessage: FC<ErrorProps> = ({errorMessage}) => {
  return (
    <Text animation="slideInLeft" style={styles.errorText}>
      {errorMessage}
    </Text>
  );
};

const styles = StyleSheet.create({
  errorText: {
    ...gStyles.b3,
    color: colors.error,
  },
});

export default ErrorMessage;
