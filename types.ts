export enum EditionType {
  CONSUMER = 'CONSUMER',
  TACTICAL = 'TACTICAL'
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface SpecItem {
  label: string;
  value: string;
}
