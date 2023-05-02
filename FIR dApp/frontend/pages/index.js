import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();
  const [loading, setLoading] = useState(false);

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();

    if (chainId !== 5) {
      window.alert("Please connect to Goerli Testnet");
      throw new Error("Please connect to Goerli Testnet");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  return (
    <>
      <Head>
        <title>FIR Portal</title>
        <meta name="description" content="Fir-Complaints-Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div>
        <div className="flex justify-between m-5 items-center">
          <div className="hidden lg:block"> logo </div>
          <div className="text-3xl font-semibold ml-5">FIR PORTAL</div>
          <div>
            <button className="bg-red-500 w-40 h-10 rounded-lg hover:bg-red-600">
              Connect Wallet!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
