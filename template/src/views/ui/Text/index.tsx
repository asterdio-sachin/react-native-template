import React, {FC} from 'react';
import {
  ColorValue,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

import {TextSize} from '@src/types';
import {colors, getFontSize} from '@src/helpers';

interface TextProps extends RNTextProps {
  size?: TextSize;
  color?: ColorValue;
}

const Text: FC<TextProps> = ({
  children,
  size = 'b1',
  color = colors.text_13,
  style,
  ...restProps
}) => {
  return (
    <RNText style={[getFontSize(size), {color: color}, style]} {...restProps}>
      {children}
    </RNText>
  );
};

export default Text;
