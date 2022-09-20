import Root from "components/base/core/Root";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import '../styles/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Root>
          <Component {...pageProps} />
        </Root>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
