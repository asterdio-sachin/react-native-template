/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import colors from '@src/helpers/colors';
import {isAndroid} from '@src/helpers/metrices';

if (isAndroid) {
  StatusBar.setBackgroundColor(colors.white, true);
  StatusBar.setBarStyle('dark-content', true);
}

AppRegistry.registerComponent(appName, () => App);
