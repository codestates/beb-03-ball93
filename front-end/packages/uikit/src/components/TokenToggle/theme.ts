import { darkColors, lightColors } from '../../theme/colors';
import { TokenToggleTheme } from './types';

export const light: TokenToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: TokenToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
