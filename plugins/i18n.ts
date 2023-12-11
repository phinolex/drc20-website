import { createI18n } from 'vue-i18n'
import en from '../lang/en.json'
import fr from '../lang/fr.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      fr,
    }
  })

  vueApp.use(i18n)
})
