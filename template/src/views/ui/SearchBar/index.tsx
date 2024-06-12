import React, {FC} from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {MagnifyingGlass} from 'phosphor-react-native';

import {colors, styles as gStyles} from '@src/helpers';
import {Icon, Text} from '@src/views/ui';

interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  handleSearch?: () => void;
}

const SearchBar: FC<Props> = ({style, containerStyle, ...restProps}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {restProps.editable === false ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.textInput, style]}
          onPress={restProps.handleSearch}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[!restProps.value && {color: colors.placeholder}]}>
            {restProps.value ?? restProps.placeholder}
          </Text>
        </TouchableOpacity>
      ) : (
        <TextInput
          style={[styles.textInput, style]}
          cursorColor={colors.primary}
          selectionColor={colors.primaryLight}
          placeholderTextColor={colors.placeholder}
          {...restProps}
        />
      )}
      <TouchableOpacity activeOpacity={0.7} onPress={restProps.handleSearch}>
        <Icon Icon={MagnifyingGlass} color={colors.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gStyles.flexRow,
    height: 36,
    backgroundColor: colors.searchBackground,
    paddingHorizontal: 16,
    borderRadius: 100,
    gap: 12,
  },
  textInput: {
    ...gStyles.b1,
    flex: 1,
    color: colors.text_9,
    padding: 0,
  },
});

export default SearchBar;
