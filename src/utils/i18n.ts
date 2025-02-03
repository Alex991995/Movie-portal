import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
      "Next": "Next",
      "Delite Card": "delite",
      "Add To Favorite": "like",
      "Back": 'back'

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
      "Next": "Следующий",
      "Delite Card": "удалить",
      "Add To Favorite": "нравиться",
      "Back": 'назад'
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;