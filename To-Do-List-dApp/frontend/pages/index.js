
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import Header from "./Components/Header";
import List from "./Components/List";
import { TODO_CONTRACT_ADDRESS, TO_DO_CONTRACT_ABI } from '../constants/index';

export default function Home() {
  const Web3ModalRef = useRef();
  const [darkMode, setDarkMode] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!walletConnected) {
      Web3ModalRef.current = new Web3Modal({
        network: "sepolia",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
      getTodos();
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Returns a Provider or Signer object representing the Ethereum RPC with or without the
   * signing capabilities of metamask attached
   *
   * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.
   *
   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account
   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to
   * request signatures from the user using Signer functions.
   *
   * @param {*} needSigner - True if you need the signer, default false otherwise
   */
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await Web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Sepolia network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 11155111) {
      window.alert("Change the network to Sepolia");
      throw new Error("Change network to Sepolia");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const setTodo = async (text) => {
    const signer = await getProviderOrSigner(true);

    const contract = new Contract(
      TODO_CONTRACT_ADDRESS,
      TO_DO_CONTRACT_ABI,
      signer
    );
    const setTodos = await contract.setTodo(text);
    setLoading(true);
    await setTodos.wait();
    setLoading(false);
    getTodos();
  };

  const getTodos = async () => {
    try {
      const provider = await getProviderOrSigner();
      const contract = new Contract(
        TODO_CONTRACT_ADDRESS,
        TO_DO_CONTRACT_ABI,
        provider
      );

      const todoListAray = await contract.getTodo();
      setTodoList(todoListAray);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodos = async (idx) => {
    try {
      const signer = await getProviderOrSigner(true);
      const contract = new Contract(
        TODO_CONTRACT_ADDRESS,
        TO_DO_CONTRACT_ABI,
        signer
      );

      const deleteTodo = await contract.deleteTodo();
      setLoading(true);
      await deleteTodo.wait();
      setLoading(false);
      getTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const renderTodos = todoList.map((todo, index) => {
    return (
      <List todo={todo} deleteTodos={deleteTodos} idx={index} key={index} />
    );
  });

  return (
    <>
      <main className={darkMode && "dark"}>
        <div className="dark:bg-[#10172a] bg-slate-400 min-h-screen">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            getTodos={getTodos}
            setTodo={setTodo}
          />
          {renderTodos}
        </div>
      </main> 
    </>
  );
}
