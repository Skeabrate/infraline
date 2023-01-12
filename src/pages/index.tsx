import Head from 'next/head';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Infraline</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <Navigation />

      <main>
        <div
          className={`bg-[url('../assets/slider1.jpeg')] bg-no-repeat bg-center w-full h-96`}
        ></div>
      </main>

      {/* <Footer /> */}
    </>
  );
}
