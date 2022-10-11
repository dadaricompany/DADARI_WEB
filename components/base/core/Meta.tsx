import Head from "next/head";

type Props = {
  title: String;
};

const Meta: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="google-site-verification" content="w012cJmtnDJCS2UjDJjFNJNaIeBnFK77iR1btihV3mM" />
      <meta name="theme-color" content="#111320" />
      <link rel="preconnect" href="http://52.79.72.35:4000" />
      <link rel="preconnect" href="https://dadari-api.com" />
    </Head>
  );
};

export default Meta;
