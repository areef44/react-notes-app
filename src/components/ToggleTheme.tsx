import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className='menu-style'>
      {theme === 'light' ? <FaMoon size={20}/> : <FaSun size={20}/>}
    </div>
  );
};

export default ToggleTheme;