import {createI18n} from "vue-i18n";

const messages = {
    ru: {
        "settings": {
            "headers": {
                "my_account": "Мой аккаунт",
                "personalization": "Персонализация",
                "general_information": "Общая информация",
                "api_keys": "API ключи",
                "sessions": "Сессии",
                "socials": "Социальные сети",
                "tariffs": "Тарифы",
                "friends": "Друзья",
                "security": "Безопасность",
                "notifications": "Уведомления",
                "wallet": "Кошелёк",
                "replenish_balance": "Пополнить баланс",
                "replenishment_history": "История пополнений"
            },
            "body": {
                "my_account": {
                    "avatars": "Аватарки",
                    "backgrounds": "Фоны",
                    "preview": "Предварительный просмотр",
                    "nametag": "Имя пользователя",
                    "personal_link": "Персональная ссылка",
                    "personal_link_desc": "Ваш профиль будет находиться по адресу",
                    "currency": "Валюта",
                    "location": "Местоположение",
                    "about_me": "Обо мне"
                },
                "api_keys":{
                    "api_keys_desk": 'Введите API-ключ для',
                },
                "sessions": {
                    "current_session": "Текущая сессия",
                    "active_sessions": "Активные сессии",
                    "history_sessions": "История сессий",
                    "empty_sessions": "Список сессий пуст"
                },
                "socials": {
                    "socials_continue": "Продолжить с",
                    "socials_connected": "Подключён"
                },
                "tariffs": {
                    "selected": "Выбран",
                    "buy": "Купить"
                },
                "friends": {
                    "accept_all": "Принять все",
                    "decline_all": "Отклонить все",
                    "accept": "Принять",
                    "decline": "Отклонить",
                    "search": "Поиск"
                },
                "security": {
                    "email": "Почта",
                    "password": "Пароль",
                    "confirm_password": "Подтвердите пароль",
                }
            },
            "footers": {
                "actions": {
                    "cansel": "Отменить",
                    "save": "Сохранить"
                }
            }
        }
    },
    en: {
        "settings": {
            "headers": {
                "my_account": "My account",
                "personalization": "Personalization",
                "general_information": "General information",
                "api_keys": "API keys",
                "sessions": "Sessions",
                "socials": "Social media",
                "tariffs": "Tariffs",
                "friends": "Friends",
                "security": "Security",
                "notifications": "Notifications",
                "wallet": "Wallet",
                "replenish_balance": "Replenish balance",
                "replenishment_history": "Replenishment history"
            },
            "body": {
                "my_account": {
                    "avatars": "Avatars",
                    "backgrounds": "Backgrounds",
                    "preview": "Preview",
                    "nametag": "Username",
                    "personal_link": "Personal link",
                    "personal_link_desc": "Your profile will be located at",
                    "currency": "Currency",
                    "location": "Location",
                    "about_me": "About me"
                },
                "api_keys":{
                    "api_keys_desk": 'Enter the API-key for',
                },
                "sessions": {
                    "current_session": "Current session",
                    "active_sessions": "Active sessions",
                    "history_sessions": "History sessions",
                    "empty_sessions": "Session list is empty"
                },
                "socials": {
                    "socials_continue": "Continue with",
                    "socials_connected": "Connected"
                },
                "tariffs": {
                    "selected": "Selected",
                    "buy": "Buy"
                },
                "friends": {
                    "accept_all": "Accept all",
                    "decline_all": "Decline all",
                    "accept": "Accept",
                    "decline": "Decline",
                    "search": "Search"
                },
                "security": {
                    "email": "Email",
                    "password": "Password",
                    "confirm_password": "Confirm password"
                }
            },
            "footers": {
                "actions": {
                    "cansel": "Cansel",
                    "save": "Save"
                }
            }
        }
    }
}

export const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: messages
})