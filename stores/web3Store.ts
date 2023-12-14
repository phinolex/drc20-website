import { defineStore } from "pinia"
export const useWeb3Store = defineStore("web3", {
  state: () => ({
    count: 0,
    web3: null,
    account: null,
    blogContract: null,
    blogContractAddress: "0x46E0eA790fb732Db1b22A3A6A9a3966F8E730FF3",
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
