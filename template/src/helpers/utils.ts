import {ButtonSize, ButtonType, TextSize} from '@src/types';
import styles from '@helpers/styles';
import colors from '@helpers/colors';
import countryData from '@helpers/countryData.json';

export const getFontSize = (size?: TextSize) => {
  switch (size) {
    case 'h1':
      return styles.h1;
    case 'h2':
      return styles.h2;
    case 'h3':
      return styles.h3;
    case 'h4':
      return styles.h4;
    case 'h5':
      return styles.h5;
    case 'h6':
      return styles.h6;
    case 'h7':
      return styles.h7;
    case 'b1':
    default:
      return styles.b1;
    case 'b2':
      return styles.b2;
    case 'b3':
      return styles.b3;
    case 'button':
      return styles.button;
    case 'overline':
      return styles.overline;
  }
};

export const getButtonTypeStyles = (type?: ButtonType) => {
  switch (type) {
    case 'primary':
      return styles.primaryButton;
    case 'secondary':
      return styles.secondaryButton;
    case 'tertiary':
    default:
      return {};
  }
};

export const getButtonTitleColor = (type?: ButtonType, disabled?: boolean) => {
  switch (type) {
    case 'primary':
      return colors.white;
    case 'secondary':
      return !disabled ? colors.text_13 : colors.placeholder;
    case 'tertiary':
    default:
      return !disabled ? colors.primaryDark : colors.buttonTertiaryDisable;
  }
};

export const getButtonSizeStyles = (size?: ButtonSize) => {
  switch (size) {
    case 'large':
      return {paddingVertical: 18};
    case 'medium':
      return {paddingVertical: 10};
    case 'small':
    default:
      return {paddingVertical: 6};
  }
};

export const getCountryDropDownData = () => {
  return countryData
    .filter(country => country.name)
    .map(country => {
      const value = country.iso?.['alpha-2'];
      const label = `${country.name} ${
        country.phone ? `(${country.phone[0]})` : ''
      }`;
      // const image = country.image;
      return {
        label,
        value,
        // image,
      };
    })
    .sort((a, b) => {
      if (a.label < b.label) return -1;
      if (a.label > b.label) return 1;
      return 0;
    });
};
