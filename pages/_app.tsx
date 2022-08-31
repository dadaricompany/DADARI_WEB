import Root from "components/common/Root";
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
