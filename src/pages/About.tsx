import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600">About Page</h1>
      <p className="mt-4 text-gray-600">{t('about')}</p>
    </div>
  );
};

export default About;
