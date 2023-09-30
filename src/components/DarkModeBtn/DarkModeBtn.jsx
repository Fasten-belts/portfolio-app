import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../Theme/Theme';

function DarkModeBtn() {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <button className="dark-mode-btn" onClick={toggleTheme}>
          {isDarkTheme ? (
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
          ) : (
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          )}
        </button>
      </>
    </ThemeProvider>
  );
}

export default DarkModeBtn;
