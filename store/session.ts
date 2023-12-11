// session.js (ou session.ts)
export const useSessionStore = defineStore('session', {
  state: () => ({
    isConnected: false,
    account: null,
  }),
  actions: {
    updateSession(sessionData) {
      this.isConnected = sessionData.isConnected;
      this.account = sessionData.account;
    },
  },
});
