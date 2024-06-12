import React, {FC, useEffect, useState} from 'react';
import {
  TextInput,
  TextInputProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {CaretDown} from 'phosphor-react-native';
import {SheetManager} from 'react-native-actions-sheet';

import {Text, ErrorMessage, Icon} from '@src/views/ui';
import {colors, styles as gStyles, getCountryDropDownData} from '@src/helpers';
import countryData from '@helpers/countryData.json';
import {CountryCode, LabelValue} from '@src/types';
import {DROP_DOWN_SHEET} from '@src/views/components/ActionSheets';

interface Props extends TextInputProps {
  label: string;
  countryCode: CountryCode;
  required?: boolean;
  error?: string;
}

const PhoneInput: FC<Props> = ({
  label,
  countryCode,
  required,
  error,
  onFocus,
  onBlur,
  style,
  ...restProps
}) => {
  const [callingCode, setCallingCode] = useState('');
  const [phoneLength, setPhoneLength] = useState(0);
  const [focused, setFocused] = useState(false);

  const focusedStyle: StyleProp<ViewStyle> = {
    borderColor: error
      ? colors.error
      : focused
      ? colors.primary
      : colors.border,
  };

  const handleCallingCodeChange = async () => {
    const data: LabelValue[] = getCountryDropDownData();
    const returnValue = await SheetManager.show(DROP_DOWN_SHEET, {
      payload: {title: 'Select Country', data},
    });
    if (!returnValue) return;

    getCallingCode(returnValue as CountryCode);
  };

  const getCallingCode = (countryCode: CountryCode) => {
    let _callingCode = '',
      _phoneLength = 0;
    const country = countryData.find(
      country => country.iso?.['alpha-2'] === (countryCode || 'NP'),
    );
    const callingCodeArray = country?.phone;
    if (callingCodeArray) _callingCode = callingCodeArray[0];
    _phoneLength = country?.phoneLength
      ? typeof country?.phoneLength === 'number'
        ? country.phoneLength
        : country?.phoneLength[0]
      : 0;
    setPhoneLength(_phoneLength);
    setCallingCode(_callingCode);
  };

  useEffect(() => {
    getCallingCode(countryCode);
  }, []);

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
        <TouchableOpacity
          activeOpacity={0.8}
          style={gStyles.flexRow}
          onPress={handleCallingCodeChange}>
          <Text size="b1" color={colors.text_8} style={{width: 50}}>
            {callingCode}
          </Text>
          <Icon Icon={CaretDown} size={12} />
        </TouchableOpacity>
        <View style={styles.vertical} />
        <TextInput
          style={[styles.textInput, style]}
          cursorColor={colors.primary}
          selectionColor={colors.primaryLight}
          maxLength={phoneLength}
          keyboardType="number-pad"
          textContentType="telephoneNumber"
          placeholderTextColor={colors.placeholder}
          onFocus={e => {
            onFocus && onFocus(e);
            setFocused(true);
          }}
          onBlur={e => {
            onBlur && onBlur(e);
            setFocused(false);
          }}
          {...restProps}
        />
      </View>
      {error && <ErrorMessage errorMessage={error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gStyles.flexRow,
    gap: 12,
    justifyContent: 'flex-start',
    height: 48,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 100,
  },
  vertical: {
    height: 20,
    width: 1,
    backgroundColor: colors.buttonBorder,
  },
  textInput: {
    ...gStyles.b1,
    flex: 1,
    color: colors.text_9,
    padding: 0,
  },
});

export default PhoneInput;
