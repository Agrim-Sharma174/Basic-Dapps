import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Balance from "./Components/Balance";


const inter = Inter({ subsets: ["latin"] });
              
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  {darkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark")}
  return (
    <div className="darkMode && 'dark'">
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <section 
    className={` w-screen h-screen no-repeat bg-cover flex items-center flex-col transition-all duration-500 dark:w-screen dark:h-screen dark:no-repeat dark:bg-cover ${darkMode ? `bg-[url('https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]` : `bg-[url('https://images.unsplash.com/photo-1542709111240-e9df0dd813b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]`}`}
    >
        <div className="flex items-center justify-center h-32">
          {darkMode ? (
            <img
              src="https://img.icons8.com/dusk/64/undefined/smiling-sun.png"
              className="cursor-pointer"
              onClick={setDarkMode}
            />
          ) : (
            <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/undefined/external-moon-weather-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
              className="cursor-pointer"
              onClick={setDarkMode}
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center rounded pt-3 py-5 px-8 gap-2 ${darkMode ? `bg-[#151c61] text-white` : `ng-white`} "></div>
        <Balance />
      </section> */}

      <section className="w-screen h-screen flex flex-col justify-center items-center ">
        <div onClick={toggleDarkMode} className="toggle ">
          <img src="https://img.icons8.com/dusk/64/undefined/smiling-sun.png" alt="" />
        </div>
        <div className=""></div>
      </section>

    </div>
  );
}
