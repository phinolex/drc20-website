import { defineStore } from "pinia"
export const useWeb3Store = defineStore("web3", {
  state: () => ({
    count: 0,
    web3: null,
    account: null,
    dogecoincontract: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
    dogecoinabi: "https://api.bscscan.com/api?module=contract&action=getabi&address=0x2f99a7a81a3a446db9fdfcab10c47a406f874b50",
    blogContract: null,
    blogContractAddress: "0x2f7C319eDf93364976E548E659f3400d5A511Ff0",
    allBlogPosts: null,
  }),
  actions: {
    setAccount(account: null) {
      this.account = account
    },
    setWeb3Instance(web3: null) {
      this.web3 = web3
    },
    setBlogContract(blogContract: null) {
      this.blogContract = blogContract
    },
  },
})
