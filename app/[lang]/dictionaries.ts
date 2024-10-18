import 'server-only';

const dictionaries: any = {
  'en-US': () => import('./dictionaries/en.json').then((module) => module.default),
  'ko-KR': () => import('./dictionaries/ko.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
