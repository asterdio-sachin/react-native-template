import {NativeStackScreenProps} from '@react-navigation/native-stack';

import routes from '@navigation/routes';

export type UserStackProps = {
  [routes.HOME]: undefined;
};

export interface UserScreenProps<T extends keyof UserStackProps>
  extends NativeStackScreenProps<UserStackProps, T> {}
