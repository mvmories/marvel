import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    carbon: '#333333',
    red: 'red',
    pebble: '#f3f3f3',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
