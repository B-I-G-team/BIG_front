const color = {
  black: '#000000', // black
  white: '#FFFFFF', // white
  primary_95: '#FDEEE8',
  primary_85: '#F9CCB9',
  primary_75: '#F4AB8A',
  primary_65: '#F08A5D',
  primary_55: '#EC672D', // primary
  primary_45: '#D24E13',
  primary_35: '#A33D0F',
  primary_25: '#752B0B',
  blue: '#3DA5F5',
  border: '#E0E2E7',
  kakao_container: '#FEE500',
  kakao_symbol: '#000000',
  kakao_label: 'rgba(0,0,0,0.8)',
};

const size = {
  display_1: `3.875rem`,
  display_2: `3.375rem`,
  heading_1: `2.875rem`,
  heading_2: `2.375rem`,
  heading_3: `1.875rem`,
  heading_4: `1.625rem`,
  heading_5: `1.375rem`,
  heading_6: `1.125rem`,
  subtitle_1: `1rem`,
  subtitle_2: `0.875rem`,
  body_1: `0.875rem`,
  body_2: `0.75rem`,
  body_3: `0.625rem`,
  button_1: `0.875rem`,
  button_2: `0.75rem`,
  caption: `0.625rem`,
};

const weight = {
  heading1: 700,
  bold: 800,
  medium: 600,
  regular: 500,
  light: 300,
  thin: 100,
};

const font = {
  size,
  weight,
};

const grid = {
  mobile: `(min-width: 360px)`,
  tablet: `(min-width: 744px)`,
  laptop: `(min-width: 1440px)`,
  desktop: `(min-width: 1920px)`,
};

export const theme = {
  color,
  grid,
  font,
};

export type Theme = typeof theme;
