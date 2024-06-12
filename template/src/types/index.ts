export * from '@apptypes/navigation';
export * from '@apptypes/countryCode';

export type $FIXME = any;

export type KeyValue = {[key: string]: any};

export type LabelValue = {
  label: string;
  value?: string | number;
  image?: string;
};

export type TextSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'b1'
  | 'b2'
  | 'b3'
  | 'button'
  | 'overline';

export type ButtonSize = 'large' | 'medium' | 'small';

export type ButtonType = 'primary' | 'secondary' | 'tertiary';

export type TopBarType = 'logo' | 'back' | 'search';