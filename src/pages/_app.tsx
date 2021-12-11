import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from 'styles';

/**
 * @component Next.js root component
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <meta
          name='description'
          content='A boilerplate to work with Next.js, Typescript and more.'
        />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}
