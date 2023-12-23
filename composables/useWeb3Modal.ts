import { useWeb3Modal } from "@web3modal/ethers5/vue";

export default function Component() {
  const { open, close } = useWeb3Modal();

  async function connect() {
    const openResult = await open();
    console.log("open result:", openResult);
  }

  return {
    connect,
  };
}

