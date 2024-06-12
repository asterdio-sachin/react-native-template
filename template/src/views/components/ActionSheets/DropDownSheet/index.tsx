import React, {FC, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ActionSheet, {
  ActionSheetRef,
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {FlashList} from 'react-native-actions-sheet/dist/src/views/FlashList';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Button, SearchBar, Text} from '@src/views/ui';
import {DROP_DOWN_SHEET} from '@components/ActionSheets';
import {colors, styles as gStyles} from '@src/helpers';
import {LabelValue} from '@src/types';
import Item from '@components/ActionSheets/DropDownSheet/Item';

const DropDownSheet: FC<SheetProps<typeof DROP_DOWN_SHEET>> = ({
  sheetId,
  payload,
}) => {
  const ref = useRef<ActionSheetRef>(null);
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string[]>(payload?.selected || []);

  const handlePress = (item: LabelValue) => {
    if (!payload || !item.value) return;

    const value = item.value.toString();

    if (payload.multiple) {
      if (selected.includes(value)) {
        setSelected(prev => prev.filter(p => p !== value));
      } else {
        setSelected(p => [...p, value]);
      }
      return;
    }

    SheetManager.hide(sheetId, {
      payload: value,
    });
  };

  const handleDone = () => {
    SheetManager.hide(sheetId, {
      payload: selected,
    });
  };

  const EmptyComponent = (
    <Text
      size="b1"
      color={colors.placeholder}
      style={{padding: 16, alignSelf: 'center'}}>
      No Result Found
    </Text>
  );

  return (
    <ActionSheet
      ref={ref}
      id={sheetId}
      safeAreaInsets={{...insets, bottom: 0}}
      containerStyle={{paddingTop: 8, flex: 1}}
      gestureEnabled
      defaultOverlayOpacity={0.4}
      snapPoints={[50, 100]}
      initialSnapIndex={payload && payload.data.length >= 15 ? 1 : 0}>
      <View style={{height: '100%'}}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View>
              <Text size="h6">{payload?.title}</Text>
              {payload?.multiple && (
                <Text size="b3" color={colors.text_8}>
                  Choose multiple Items
                </Text>
              )}
            </View>
            {selected.length > 0 && (
              <Button title="Done" size="small" onPress={handleDone} />
            )}
          </View>
          <SearchBar
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <FlashList
          keyExtractor={item => item.label}
          estimatedItemSize={200}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          ListEmptyComponent={EmptyComponent}
          ItemSeparatorComponent={() => <View style={{height: 4}} />}
          data={payload?.data.filter(d => {
            return d.label.toLowerCase().indexOf(search.toLowerCase()) >= 0;
          })}
          renderItem={({item}) => {
            const _selected = selected.findIndex(s => s === item.value) > -1;

            return (
              <Item
                {...item}
                selected={_selected}
                onPress={() => handlePress(item)}
              />
            );
          }}
        />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  headerContainer: {
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  header: {
    ...gStyles.flexRow,
    justifyContent: 'space-between',
  },
});

export default DropDownSheet;
