import Root from "components/common/Root";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

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
