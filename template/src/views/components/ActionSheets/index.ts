import {SheetDefinition, registerSheet} from 'react-native-actions-sheet';

import DropDownSheet from '@src/views/components/ActionSheets/DropDownSheet';
import {LabelValue} from '@src/types';

export const DROP_DOWN_SHEET = 'drop-down-sheet';

registerSheet(DROP_DOWN_SHEET, DropDownSheet);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    [DROP_DOWN_SHEET]: SheetDefinition<{
      payload: {
        title: string;
        data: LabelValue[];
        multiple?: boolean;
        selected?: string[];
      };
      returnValue: string | string[];
    }>;
  }
}
