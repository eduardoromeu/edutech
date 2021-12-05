import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//Tema claro
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#0062AA',
    },
    secondary: {
      main: '#00984B',
    },
    background: {
      paper: '#FFF',
      default: '#FFF',
    },
    text: {
      main: '#000',
      primary: '#000',
      primaryColored: '#0062AA',
    }
  },
});

//Tema escuro
const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#0062AA',
    },
    secondary: {
      main: '#00984B',
    },
    background: {
      paper: '#121212',
      default: '#121212',
    },
    text: {
      main: '#FAFAFA',
      primary: '#FAFAFA',
      primaryColored: '#EAEAEA',
    }
  },
});

//Provedor do tema, pega o tema atual e manda para os seus componentes filhos
const Theme = (props) => {
  const { children, darkMode } = props;
  const defaultTheme = darkMode ? themeDark : theme;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

//Exporta o componente com o tema atual e uma função para trocar o tema
export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};

// Tutorial: https://entryleveldeveloper.training/article/andrewgbliss/how-to-use-material-ui-themes-and-dark-mode