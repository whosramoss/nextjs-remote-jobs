
import { useEffect } from 'react';
import AppI18nConfig from '@utils/app-i18n-config';

export const useLanguageRedirect = () => {
  useEffect(() => {
    window.location.href = AppI18nConfig.setUrlByDefaultLocale('/')
  }, []);
};