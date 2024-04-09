// components
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

// context
import { UserContext } from '../lib/context';

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{user: {}, username: "snaxks"}}>
      <Navbar/>
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
