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
                },
                "wallet": {
                    "amount": "Сумма",
                    "pay": "Оплатить",
                    "to_pay": "К оплате"
                }
            },
            "footers": {
                "actions": {
                    "cancel": "Отменить",
                    "save": "Сохранить"
                }
            }
        },
        "item": {
            "price": "Текущая цена",
            "avg_day_procent": "Цена за день",
            "avg_week_procent": "Цена за неделю",
            "avg_month_procent": "Цена за месяц",
            "avg_year_procent": "Цена за год",
            "history_price": "История цен",
            "zoom_graph": "Увеличить график",
            "day": "День",
            "week": "Неделя",
            "month": "Месяц",
            "year": "Год",
            "lifetime": "Всё время"
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
                },
                "wallet": {
                    "amount": "Amount",
                    "pay": "Pay",
                    "to_pay": "To pay"
                }
            },
            "footers": {
                "actions": {
                    "cancel": "Cancel",
                    "save": "Save"
                }
            }
        },
        "item": {
            "price": "Current price",
            "avg_day_procent": "Price per day",
            "avg_week_procent": "Price per week",
            "avg_month_procent": "Price per month",
            "avg_year_procent": "Price per year",
            "history_price": "History price",
            "zoom_graph": "Zoom graph",
            "day": "Day",
            "week": "Week",
            "month": "Month",
            "year": "Year",
            "lifetime": "Lifetime"
        }
    }
}

export const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: messages
})