import { register, init, addMessages, getLocaleFromNavigator } from 'svelte-i18n';
// import en from './en.json';
// import ru from './ru.json';
export function setupI18n() {
    register('en', () => import('./en.json'));
    register('ru', () => import('./ru.json'));
    // addMessages('en', en);
    // addMessages('ru', ru);

    init({
        fallbackLocale: 'en',
        initialLocale: "ru",
        // initialLocale: getLocaleFromNavigator(),
    });
}