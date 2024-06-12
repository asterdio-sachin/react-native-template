import React, {FC, memo} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import {Icon, Text} from '@src/views/ui';
import {LabelValue} from '@src/types';
import {colors, styles as gStyles} from '@src/helpers';
import {CheckCircle} from 'phosphor-react-native';

interface Props extends LabelValue {
  selected?: boolean;
  onPress?: () => void;
}

const Item: FC<Props> = ({label, selected = false, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.primaryLight}
      style={{borderRadius: 20}}
      onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        {selected && (
          <Icon Icon={CheckCircle} weight="fill" color={colors.primary} />
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gStyles.flexRow,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  label: {
    paddingVertical: 4,
  },
});

export default memo(Item);
