// components/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')} className="btn">EN</button>
      <button onClick={() => changeLanguage('ru')} className="btn">RU</button>
    </div>
  );
};

export default LanguageSwitcher;
