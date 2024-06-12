import React, {FC} from 'react';
import {Button, View} from 'react-native';

import {Text} from '@src/views/ui';

interface Props {
  error: Error;
  resetError: () => void;
}

const ErrorFallbackComponent: FC<Props> = ({error, resetError}) => {
  return (
    <View>
      <Text>{error.message}</Text>
      <Button title="Try Again" onPress={resetError} />
    </View>
  );
};

export default ErrorFallbackComponent;
