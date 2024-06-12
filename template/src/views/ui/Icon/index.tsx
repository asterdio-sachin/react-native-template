import React, {ElementType, FC} from 'react';
import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {IconProps as PhosphorIconProps} from 'phosphor-react-native';

import {colors} from '@src/helpers';

export interface IconProps extends PhosphorIconProps {
  Icon: ElementType;
  activeOpacity?: number;
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Icon: FC<IconProps> = ({
  Icon,
  onPress,
  style,
  color = colors.icon,
  disabled = false,
  activeOpacity = 0.7,
  ...restprops
}) => {
  return (
    <TouchableOpacity
      disabled={!onPress}
      activeOpacity={onPress ? activeOpacity : 1}
      style={style}
      onPress={onPress}>
      <Icon color={disabled ? colors.icon : color} size={18} {...restprops} />
    </TouchableOpacity>
  );
};

export default Icon;
