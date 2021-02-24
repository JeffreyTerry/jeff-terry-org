export interface ColorTheme {
  name: string;
  bgColor: string;
  bgColorSecondary: string;
  primaryColor: string;
  secondaryColor: string;
  terciaryColor: string;
  quaternaryColor: string;
  quinaryColor: string;
}

export const LIGHT_THEME: ColorTheme = {
  name: 'light',
  bgColor: '#fff',
  bgColorSecondary: '#F7F2ED',
  // bgColorSecondary: '#EFFAFD', // Light blue, looks a little too flowery
  primaryColor: '#2d728f', // contrast ratio 5.36
  secondaryColor: '#f49e4c', // low contrast 2.13
  terciaryColor: '#ab3428', // contrast ratio 3.75
  quaternaryColor: '#3b8ea5', // contrast ratio 3.75
  quinaryColor: '#f5ee9e',
};

export const DARK_THEME: ColorTheme = {
  name: 'dark',
  bgColor: '#1e1e1e',
  bgColorSecondary: '#2d2d2d',
  primaryColor: '#cccccc', // contrast ratio >= 8.57
  secondaryColor: '#f49e4c', // TODO
  terciaryColor: '#ab3428', // TODO
  quaternaryColor: '#3b8ea5', // TODO
  quinaryColor: '#f5ee9e', // TODO
};
