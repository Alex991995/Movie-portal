import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Log out": "Log out",
      "Log in": "Log in",
      "Sign up": "Sign up",
      "Favorites": "Favorites",
      "Switch the theme": "Switch the theme",
      "Type": "Type...",
      "Choose genre": "Choose genre",
      "Choose year": "Choose year",
      "Reset":"Reset",
      "Username": "Username",
      "Type your username": "Type your username",
      "Password": "Password",
      "Type your password": "Type your password",
      "Password confirmation": "Password confirmation",
      "Confirm your password": "Confirm your password",
      "Submit": "Submit",
      "Previous": "Previous",
      "Next": "Next"

    }
  },
  ru: {
    translation: {
      "Log out": "Выйти",
      "Log in": "Войти",
      "Sign up": "Зарегистрироваться",
      "Favorites": "Избранные",
      "Switch the theme": "Переключить тему",
      "Type": "Введите фильм..",
      "Choose genre": "Выберите жанр",
      "Choose year": "Выберите год",
      "Reset":"Cбросить",
      "Username": "Имя пользователя",
      "Type your username": "Ведите свое имя",
      "Password": "Пароль",
      "Type your password": "Введите свой пароль",
      "Password confirmation": "Подтверждение пароля",
      "Confirm your password": "Подтвердите свой пароль",
      "Submit" : "Отправить",
      "Previous": "Предыдущий",
      "Next": "Следующий"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;