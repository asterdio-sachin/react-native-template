import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {CaretLeft, FadersHorizontal} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {isAndroid} from '@src/helpers/metrices';
import {LogoMainSVG} from '@src/assets/svgs';
import {colors, styles as gstyles} from '@src/helpers';
import {SearchBar, Text} from '@src/views/ui';
import {TopBarType, UserStackProps} from '@src/types';

interface Props extends PropsWithChildren {
  scroll?: boolean;
  barType?: TopBarType;
  title?: string;
  searchEditable?: boolean;
  searchPlaceHolder?: string;
  handleFilter?: () => void;
  scrollProps?: ScrollViewProps;
}

const MainLayout: React.FC<Props> = ({
  scroll = true,
  children,
  barType,
  title,
  searchEditable,
  searchPlaceHolder,
  handleFilter,
  scrollProps,
}) => {
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
        <LaoutTopBar
          barType={barType}
          title={title}
          searchEditable={searchEditable}
          handleBack={handleBack}
          searchPlaceHolder={searchPlaceHolder}
          handleFilter={handleFilter}
        />
        <View style={{flex: 1}}>
          {scroll ? (
            <ScrollView showsVerticalScrollIndicator={false} {...scrollProps}>
              {children}
            </ScrollView>
          ) : (
            children
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

interface TopBarProps {
  barType?: TopBarType;
  title?: string;
  handleBack: () => void;
  searchEditable?: boolean;
  searchPlaceHolder?: string;
  handleFilter?: () => void;
}

const LaoutTopBar: React.FC<TopBarProps> = ({
  barType,
  title = '',
  handleBack,
  searchEditable = false,
  searchPlaceHolder = 'Search...',
  handleFilter,
}) => {
  const _renderBar = () => {
    switch (barType) {
      case 'back':
        return (
          <>
            <TouchableOpacity activeOpacity={0.6} onPress={handleBack}>
              <CaretLeft size={24} />
            </TouchableOpacity>
            <Text size="h6">{title}</Text>
          </>
        );
      case 'search':
        return (
          <>
            <TouchableOpacity activeOpacity={0.6} onPress={handleBack}>
              <CaretLeft size={24} />
            </TouchableOpacity>
            <SearchBar
              containerStyle={{flex: 1}}
              placeholder={searchPlaceHolder}
              editable={searchEditable}
              handleSearch={() => {}}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={handleFilter}
              style={styles.filterIcon}>
              <FadersHorizontal size={18} />
            </TouchableOpacity>
          </>
        );
      default:
        return (
          <>
            <LogoMainSVG height={20} />
          </>
        );
    }
  };

  return <View style={styles.topBar}>{_renderBar()}</View>;
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
    ...gstyles.flexRow,
    ...gstyles.shadow,
    gap: 6,
    padding: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  filterIcon: {
    borderWidth: 1,
    borderColor: colors.border,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
  },
});

export default MainLayout;
