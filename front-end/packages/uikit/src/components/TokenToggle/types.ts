import { InputHTMLAttributes } from 'react';

export type TokenToggleTheme = {
  handleBackground: string;
  handleShadow: string;
};

export const scales = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface TokenToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: Scales;
  checked?: boolean;
}

export interface HandleProps {
  scale: Scales;
}

export interface InputProps {
  scale: Scales;
}

export const scaleKeys = {
  tokenSize: 'tokenSize',
  travelDistance: 'travelDistance',
  toggleHeight: 'toggleHeight',
  toggleWidth: 'toggleWidth',
  tokenThickness: 'tokenThickness',
  tokenTwoOffset: 'tokenTwoOffset',
  tokenThreeOffset: 'tokenThreeOffset',
  butterTop: 'butterTop',
  butterLeft: 'butterLeft',
  butterWidth: 'butterWidth',
  butterHeight: 'butterHeight',
  butterThickness: 'butterThickness',
  butterRadius: 'butterRadius',
  butterSmearOneTop: 'butterSmearOneTop',
  butterSmearOneLeft: 'butterSmearOneLeft',
  butterSmearTwoTop: 'butterSmearTwoTop',
  butterSmearTwoRight: 'butterSmearTwoRight',
} as const;

export type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
