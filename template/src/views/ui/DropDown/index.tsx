import React, {FC, useEffect, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableHighlight,
} from 'react-native';
import {CaretDown, X} from 'phosphor-react-native';
import {SheetManager} from 'react-native-actions-sheet';

import {Text, ErrorMessage, Icon} from '@src/views/ui';
import {colors, styles as gStyles} from '@src/helpers';
import {$FIXME, LabelValue, TextSize} from '@src/types';
import {DROP_DOWN_SHEET} from '@src/views/components/ActionSheets';

type Multiple =
  | {type: 'single'; value?: string; setValue?: (value: string) => void}
  | {type: 'multiple'; value?: string[]; setValue?: (value: string[]) => void};

interface Props extends TouchableOpacityProps {
  label?: string;
  labelSize?: TextSize;
  items: LabelValue[];
  required?: boolean;
  error?: string;
  placeholder?: string;
  placeholderColor?: string;
}

const DropDown: FC<Props & Multiple> = ({
  label,
  labelSize = 'b2',
  value,
  setValue,
  items,
  required,
  type,
  error,
  style,
  placeholder = `Select ${type === 'multiple' ? 'items' : 'an item'}`,
  placeholderColor = colors.placeholder,
  ...restProps
}) => {
  const [_value, _setValue] = useState<string | string[] | undefined>(value);

  const focusedStyle: StyleProp<ViewStyle> = {
    borderColor: error ? colors.error : colors.border,
  };

  const handleSelect = async () => {
    const value = await SheetManager.show(DROP_DOWN_SHEET, {
      payload: {
        title: placeholder,
        multiple: type === 'multiple',
        data: items,
        selected: _value && typeof _value === 'object' ? _value : [],
      },
    });

    if (!value) return;

    if (setValue) setValue(value as $FIXME);
    _setValue(value);
  };

  const handleDelete = (val: string) => {
    if (_value && typeof _value === 'object') {
      let newValue: string[] | undefined = _value.filter(v => v !== val);

      if (newValue.length === 0) newValue = undefined;

      if (setValue) setValue(newValue as $FIXME);
      _setValue(newValue);
    }
  };

  return (
    <View style={{gap: 8}}>
      {label && (
        <Text size={labelSize} color={colors.text_9}>
          {label}
          {required && (
            <Text size={labelSize} color={colors.error}>
              {` *`}
            </Text>
          )}
        </Text>
      )}
      <TouchableHighlight
        underlayColor={colors.primaryLight}
        style={{borderRadius: 100}}
        onPress={handleSelect}>
        <View
          activeOpacity={0.8}
          style={[styles.container, focusedStyle]}
          {...restProps}>
          {!_value || typeof _value === 'string' ? (
            <Text
              size="b1"
              style={{flex: 1}}
              color={_value ? colors.text_8 : placeholderColor}>
              {_value || placeholder}
            </Text>
          ) : (
            <View style={styles.multipleView}>
              {_value.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.7}
                  style={styles.multiple}
                  onPress={() => handleDelete(item)}>
                  <Text>{item}</Text>
                  <Icon Icon={X} size={12} />
                </TouchableOpacity>
              ))}
            </View>
          )}
          <Icon Icon={CaretDown} color={placeholderColor} />
        </View>
      </TouchableHighlight>
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
  multipleView: {
    ...gStyles.flexRow,
    flex: 1,
    gap: 8,
    flexWrap: 'wrap',
  },
  multiple: {
    ...gStyles.flexRow,
    backgroundColor: colors.buttonBorder,
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 4,
    borderRadius: 50,
    gap: 4,
  },
});

export default DropDown;
