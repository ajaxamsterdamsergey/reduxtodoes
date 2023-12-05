import React, { useEffect } from 'react';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { HeaderWrapper, Logo, Navigation, ToggleThemeButton, ToggleInput, Slider } from './Header.styled';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Обновляем класс для body в зависимости от темы
    document.body.className = theme;
  }, [theme]);

  return (
    <HeaderWrapper>
      <Logo>
        <img src="Logo.svg" alt="Logo" />
      </Logo>
      <Navigation>
        <ToggleThemeButton>
          <ToggleInput type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <Slider />
        </ToggleThemeButton>
      </Navigation>
    </HeaderWrapper>
  );
};
