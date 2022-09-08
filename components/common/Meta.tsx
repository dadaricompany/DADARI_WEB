import Head from "next/head";
interface MetaProps {
  title: String;
}
const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#111320" />
      <link rel="preconnect" href="http://52.79.72.35:4000" />
    </Head>
  );
};

export default Meta;
