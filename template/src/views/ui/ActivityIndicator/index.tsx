import React, {FC} from 'react';
import LottieView, {AnimationObject} from 'lottie-react-native';

import {colors} from '@src/helpers';

interface Props {
  size?: number;
  color?: string;
  source?:
    | string
    | AnimationObject
    | {
        uri: string;
      }
    | undefined;
}

const ActivityIndicator: FC<Props> = ({
  size = 18,
  color = colors.primary,
  source,
}) => {
  return (
    <LottieView
      source={source || require('@assets/lottie/loading.json')}
      style={{width: size, height: size}}
      colorFilters={[
        {
          keypath: 'spinner Outlines',
          color: color,
        },
      ]}
      autoPlay
      loop
    />
  );
};

export default ActivityIndicator;
