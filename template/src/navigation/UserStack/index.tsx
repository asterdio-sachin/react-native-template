import React, {FC} from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import routes from '@navigation/routes';
import Home from '@screens/Home';
import {UserStackProps} from '@src/types';

interface Props {
  screenOptions?: NativeStackNavigationOptions;
}

const Stack = createNativeStackNavigator<UserStackProps>();

const UserStack: FC<Props> = ({screenOptions}) => {
  const {HOME} = routes;

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default UserStack;
