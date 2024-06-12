import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {CaretLeft} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {isAndroid} from '@src/helpers/metrices';
import {colors, styles as gstyles} from '@src/helpers';
import {Text} from '@src/views/ui';
import {UserStackProps} from '@src/types';

interface Props extends PropsWithChildren {
  title?: string;
  back?: boolean;
}

const AuthLayout: React.FC<Props> = ({children, title, back}) => {
  const navigation = useNavigation<NativeStackNavigationProp<UserStackProps>>();
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        behavior={isAndroid ? undefined : 'height'}
        style={styles.container}>
        {back && <BackTopBar title={title} handleBack={handleBack} />}
        <View style={{flex: 1}}>
          <ScrollView>{children}</ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthLayout;

interface TopBarProps {
  title?: string;
  handleBack: () => void;
}

const BackTopBar: React.FC<TopBarProps> = ({title = '', handleBack}) => {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity activeOpacity={0.6} onPress={handleBack}>
        <CaretLeft size={24} />
      </TouchableOpacity>
      <Text size="h6">{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    ...gstyles.shadow,
  },
});
