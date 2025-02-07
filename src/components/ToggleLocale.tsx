import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { FaLanguage } from 'react-icons/fa6';
 
const ToggleLocale = () => {
  const { toggleLocale } = useContext(LocaleContext);

  return (
    <div onClick={toggleLocale} className='menu-style'>
      <FaLanguage size={25}/> 
    </div>
  );
};

export default ToggleLocale;