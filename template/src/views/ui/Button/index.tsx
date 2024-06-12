import React, {ElementType, FC} from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import {
  colors,
  styles as gStyles,
  getButtonSizeStyles,
  getButtonTypeStyles,
  getButtonTitleColor,
} from '@src/helpers';
import {ButtonSize, ButtonType} from '@src/types';
import {ActivityIndicator, Icon, Text} from '@src/views/ui';

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  LeftIcon?: ElementType;
  RightIcon?: ElementType;
}

const Button: FC<Props> = ({
  title,
  loading,
  type = 'primary',
  size = 'medium',
  style,
  disabled,
  LeftIcon,
  RightIcon,
  ...restProps
}) => {
  const disabledStyle: StyleProp<ViewStyle> = type === 'primary' && {
    backgroundColor: colors.primaryDisable,
    borderColor: colors.primaryDisable,
  };

  const titleColor: ColorValue = getButtonTitleColor(type, disabled);

  const Loader = <ActivityIndicator color={titleColor} />;

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        getButtonTypeStyles(type),
        getButtonSizeStyles(size),
        disabled && disabledStyle,
        styles.container,
        style,
      ]}
      {...restProps}>
      {!!LeftIcon &&
        (loading ? Loader : <Icon Icon={LeftIcon} color={titleColor} />)}
      <Text size="button" color={titleColor}>
        {title}
      </Text>
      {!!RightIcon &&
        (loading ? Loader : <Icon Icon={RightIcon} color={titleColor} />)}
      {!LeftIcon && !RightIcon && loading && Loader}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gStyles.flexRow,
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 6,
  },
});

export default Button;
