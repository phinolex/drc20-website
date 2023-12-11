import { VueDapp } from 'vue-dapp'

import WalletConnectProvider from '@walletconnect/web3-provider'

export default defineNuxtPlugin(nuxtApp => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "80c55c1a9efb7ba1d32582051978a81d" // Utilisez votre Project ID ici
      }
    }
  }

  nuxtApp.vueApp.use(VueDapp, { providerOptions })
})