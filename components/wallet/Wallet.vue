<script setup>
import Web3 from "web3"
import blogContractABI from "@/abis/abi.json"
import detectEthereumProvider from "@metamask/detect-provider"

// Wallet Connect
import { Core } from "@walletconnect/core"
import { Web3Wallet } from "@walletconnect/web3wallet"
import { buildApprovedNamespaces, getSdkError } from "@walletconnect/utils"



const runtimeConfig = useRuntimeConfig()
const web3Store = useWeb3Store()

const core = new Core({
  projectId: runtimeConfig.public.PROJECT_ID,
})

const web3wallet = await Web3Wallet.init({
  core, // <- pass the shared `core` instance
  metadata: {
    name: "Nuxt x Solidity",
    description: "Demo Client as Wallet/Peer",
    url: "www.walletconnect.com",
    icons: [],
  },
})

async function onSessionProposal({ id, params }) {
  try {
    // ------- namespaces builder util ------------ //
    const approvedNamespaces = buildApprovedNamespaces({
      proposal: params,
      supportedNamespaces: {
        eip155: {
          chains: ["eip155:1", "eip155:137"],
          methods: ["eth_sendTransaction", "personal_sign"],
          events: ["accountsChanged", "chainChanged"],
          accounts: [
            "eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
            "eip155:137:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb",
          ],
        },
      },
    })
    // ------- end namespaces builder util ------------ //

    const session = await web3wallet.approveSession({
      id,
      namespaces: approvedNamespaces,
    })
  } catch (error) {
    // use the error.message to show toast/info-box letting the user know that the connection attempt was unsuccessful
    console.log("error:", error)
    await web3wallet.rejectSession({
      id: proposal.id,
      reason: getSdkError("USER_REJECTED"),
    })
  }
}


web3wallet.on("session_proposal", onSessionProposal)

console.log("web3wallet", web3wallet)

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

// console.log("abi:", contractABI)
</script>

<template>

</template>
