import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入语言资源
import zhCommon from '../locales/zh/common.json';
import zhAssessment from '../locales/zh/assessment.json';
import zhResults from '../locales/zh/results.json';
import zhGuide from '../locales/zh/guide.json';
import zhScience from '../locales/zh/science.json';
import zhHome from '../locales/zh/home.json';

import jaCommon from '../locales/ja/common.json';
import jaAssessment from '../locales/ja/assessment.json';
import jaResults from '../locales/ja/results.json';
import jaGuide from '../locales/ja/guide.json';
import jaScience from '../locales/ja/science.json';
import jaHome from '../locales/ja/home.json';

const resources = {
  zh: {
    common: zhCommon,
    assessment: zhAssessment,
    results: zhResults,
    guide: zhGuide,
    science: zhScience,
    home: zhHome,
  },
  ja: {
    common: jaCommon,
    assessment: jaAssessment,
    results: jaResults,
    guide: jaGuide,
    science: jaScience,
    home: jaHome,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    defaultNS: 'common',
    ns: ['common', 'assessment', 'results', 'guide', 'science', 'home'],
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;