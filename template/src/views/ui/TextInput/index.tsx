import React, {FC, useState} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {Eye, EyeSlash} from 'phosphor-react-native';

import {colors, styles as gStyles} from '@src/helpers';
import {Icon, Text, ErrorMessage} from '@src/views/ui';

interface TextInputProps extends RNTextInputProps {
  label: string;
  required?: boolean;
  error?: string;
}

const TextInput: FC<TextInputProps> = ({
  label,
  required,
  error,
  onFocus,
  onBlur,
  style,
  secureTextEntry,
  ...restProps
}) => {
  const [focused, setFocused] = useState(false);
  const [_secureTextEntry, _setSecureTextEntry] = useState(secureTextEntry);

  const focusedStyle: StyleProp<ViewStyle> = {
    borderColor: error
      ? colors.error
      : focused
      ? colors.primary
      : colors.border,
  };

  const handleSecureTextEntry = () => {
    _setSecureTextEntry(prev => !prev);
  };

  return (
    <View style={{gap: 8}}>
      <Text size="b2" color={colors.text_9}>
        {label}
        {required && (
          <Text size="b2" color={colors.error}>
            {` *`}
          </Text>
        )}
      </Text>
      <View style={[styles.container, focusedStyle]}>
        <RNTextInput
          style={[styles.textInput, style]}
          cursorColor={colors.primary}
          selectionColor={colors.primaryLight}
          placeholderTextColor={colors.placeholder}
          onFocus={e => {
            onFocus && onFocus(e);
            setFocused(true);
          }}
          onBlur={e => {
            onBlur && onBlur(e);
            setFocused(false);
          }}
          secureTextEntry={_secureTextEntry}
          {...restProps}
        />
        {secureTextEntry && (
          <Icon
            Icon={_secureTextEntry ? EyeSlash : Eye}
            onPress={handleSecureTextEntry}
          />
        )}
      </View>
      {error && <ErrorMessage errorMessage={error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gStyles.flexRow,
    height: 48,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 100,
  },
  textInput: {
    ...gStyles.b1,
    flex: 1,
    color: colors.text_9,
    padding: 0,
  },
});

export default TextInput;
