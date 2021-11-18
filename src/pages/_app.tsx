import 'semantic-ui-css/semantic.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Toaster,toast } from "react-hot-toast";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    storage.setItem("currentPath", globalThis.location.pathname);
  }
  useEffect(() => storePathValues, [router.asPath]);
  
  return (

  
  
  <Component {...pageProps} />
  )
}
export default MyApp
