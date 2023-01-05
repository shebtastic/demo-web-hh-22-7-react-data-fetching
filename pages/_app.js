import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

import { fetcher } from "../lib/utils";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
