import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/vue";

const { address, chainId, isConnected } = useWeb3ModalAccount();
const web3Store = useWeb3Store()

export default function Component() {
  const { open, close } = useWeb3Modal();

  async function connect() {
    const openResult = await open();
    console.log("open result:", openResult);
    const accounts = address.value;
    console.log(accounts)

    web3Store.setAccount(accounts)
  }

  return {
    connect,
  };
}
