import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

const ToggleLocale = () => {
  const { localeContext, toggleLocale } = useContext(LocaleContext);

  return (
    <button onClick={toggleLocale}>
      {localeContext === 'id' ? <p>en</p> : <p>id</p>}
    </button>
  );
};

export default ToggleLocale;