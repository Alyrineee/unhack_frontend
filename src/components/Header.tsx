import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation()

    return (
        <header className="bg-[#494D5F] text-[#E5EAF5]">
            <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
                <a className="pixel-font text-2xl font-semibold">{t('home.projectName')}</a>
                <nav className="space-x-6">
                    <a href="#home" className="hover:text-gray-300">{t('main')}</a>
                    <a href="#about" className="hover:text-gray-300">{t('home.goToAbout')}</a>
                    <a href="#contact" className="hover:text-gray-300">{t('contact')}</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;