import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';

import UserStack from '@navigation/UserStack';
import colors from '@src/helpers/colors';

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  orientation: 'portrait_up',
  statusBarColor: colors.white,
  statusBarStyle: 'dark',
  statusBarAnimation: 'fade',
  animationTypeForReplace: 'pop',
};

const Navigation = () => {
  const handleReady = async () => {
    await BootSplash.hide({fade: true});
  };

  return (
    <NavigationContainer onReady={handleReady}>
      <UserStack screenOptions={screenOptions} />
    </NavigationContainer>
  );
};

export default Navigation;
