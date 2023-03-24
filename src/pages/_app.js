import AuthProvier from "@/context/AuthContext";
import "../../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { wrapper } from "src/redux/store";
import { useStore } from "react-redux";
import { useEffect } from "react";
import { loadUserData } from "src/redux/user/userActions";
function MyApp({ Component, pageProps }) {
  const store = useStore();
  useEffect(() => {
    loadUserData(store);
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default wrapper.withRedux(MyApp);
