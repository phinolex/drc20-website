<template>

    <naive-config :theme-config="themeConfig">
        <n-notification-provider placement="bottom" :container-style="{}">
          <n-loading-bar-provider>
            <n-dialog-provider>
                <n-message-provider>
                  <!-- wallet -->
                    <LazyNavbar/>
                    <Lazynuxt-page />
                    <LazyFooter/>
                  <!-- </> wallet -->
                </n-message-provider>

            </n-dialog-provider>
          </n-loading-bar-provider>
        </n-notification-provider>
      </naive-config>
</template>

<script setup lang="ts">

const { colorModePreference } = useNaiveColorMode();
import { themeConfig } from '~/theme.config'
colorModePreference.set("dark");

const runtimeConfig = useRuntimeConfig()

// Vanilla (web3)
import Web3 from "web3"
import blogContractABI from "/abis/abi.json"
import detectEthereumProvider from "@metamask/detect-provider"

// .env setup via nuxt.config.ts
// Vanilla (web3)
// Wallet Connect (Modal)
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/vue"
// Wallet Connect (Wallet) -- CURRENTLY BREAKS SITE (heartbeat module issue)
 import { Core } from "@walletconnect/core";
 import { Web3Wallet } from "@walletconnect/web3wallet";



// Vanilla (web3)
const web3Store = useWeb3Store() // web3

// Wallet Connect (Modal)
// 1. Get projectId
const projectId = runtimeConfig.public.PROJECT_ID

// 2. Set chains
const mainnet = {
  chainId: 97,
  name: "BSC",
  currency: "BNB",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "wss://bsc-testnet.publicnode.com",
}

// 3. Create modal
const metadata = {
  name: "Nuxt x Solidity",
  description:
    "Project integrating custom Solidity smart contracts with Nuxt.js frontend",
  url: "https://nuxt-solidity-jeremykung.vercel.app/",
  icons: ["https://avatars.mywebsite.com/"],
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
})

// WalletConnect (Wallet) -- CURRENTLY BREAKS SITE (heartbeat module issue)
 const core = new Core({
//   projectId: runtimeConfig.public.PROJECT_ID,
});
 console.log("core initialized:", core);

 const web3wallet = await Web3Wallet.init({
   core, // <- pass the shared `core` instance
   metadata: {
     name: "Nuxt x Solidity",
    description:
      "Nuxt.js / Solidity / web3 / WalletConnect / Tailwind / MetaMask",
    url: "https://nuxt-solidity-jeremykung.vercel.app/",
    icons: [],
   },
 });
 console.log("web3wallet initialized:", web3wallet);

// Vanilla (web3)
onMounted(async () => {
  // Connect web3 Provider
  if (process.client && window.ethereum) {
    try {
      // Detect User Network

      const chainId = await window.ethereum.request({ method: "eth_chainId" })
      console.log("chainId", chainId)

      window.ethereum.on("chainChanged", handleChainChanged)

      function handleChainChanged(chainId) {
        // We recommend reloading the page, unless you must do otherwise.
        window.location.reload()
      }

      // Create web3 Instance
      const web3 = await new Web3(window.ethereum)
      await web3Store.setWeb3Instance(web3)
      console.log("web3:", web3Store.web3)

      // Link contract ABI
      let blogContract = await new web3Store.web3.eth.Contract(
        blogContractABI,
        web3Store.blogContractAddress
      )
      await web3Store.setBlogContract(blogContract)

      console.log("blog contract:", web3Store.blogContract)
    } catch (error) {
      console.log("error finding window.ethereum:", error)
    }
  } else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    )
  }
})

</script>
