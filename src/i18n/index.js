import {createI18n} from "vue-i18n";

const messages = {
    ru: {
        "settings": {
            "headers": {
                "my_account": "Мой аккаунт",
                "api_keys": "API ключи",
                "sessions": "Сессии",
                "socials": "Социальные сети",
                "tariffs": "Тарифы",
                "friends": "Друзья",
                "security": "Безопасность",
                "notifications": "Уведомления",
                "wallet": "Кошелёк"
            },
            "body": {
                "my_account": {
                    "avatars": "Аватарки",
                    "backgrounds": "Фоны",
                    "preview": "Предварительный просмотр"
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
                "api_keys": "API keys",
                "sessions": "Sessions",
                "socials": "Social media",
                "tariffs": "Tariffs",
                "friends": "Friends",
                "security": "Security",
                "notifications": "Notifications",
                "wallet": "Wallet"
            },
            "body": {
                "my_account": {
                    "avatars": "Avatars",
                    "backgrounds": "Backgrounds",
                    "preview": "Preview"
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