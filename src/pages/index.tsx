import Head from 'next/head';
import Image from 'next/image';
import OfertaImg from 'assets/oferta.jpg';
import FinskieImg from 'assets/finskie.jpg';
import InfraredImg from 'assets/infrared.jpg';
import CombiImg from 'assets/combi.jpg';
import AranzacjeImg from 'assets/aranzacjesolne.jpg';
import OgrodoweImg from 'assets/ogrodowe.jpg';
import WyposazenieDodatkoweImg from 'assets/wyposazeniedodatkowe.jpg';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Slider from 'components/Slider';
import ImageWithOrnament from 'components/ImageWithOrnament';
import { GoToOfficialPageFromContent } from 'components/GoToOfficialPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Infraline</title>
        <meta
          name='description'
          content='Sauny fińskie, infrared, combi Infraline'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>

      <Navigation />

      <main>
        <Slider />

        <div className='max-w-6xl mx-auto px-4 md:px-6 mt-4 md:mt-12 lg:mt-16'>
          <section className='grid md:grid-cols-2 gap-6 lg:gap-10'>
            <div>
              <h1 className='text-2xl font-bold lg:text-3xl mb-2 lg:mb-6'>
                Polski producent saun Infraline od prawie 20 lat.
              </h1>

              <p className='mb-2'>
                Zajmujemy się projektowaniem, doradztwem, a następnie produkcją i montażem saun
                Infraline, dostosowanych do oczekiwań i pomieszczeń naszych Klientów.
              </p>

              <p className='mb-2'>
                Bezpieczeństwo użytkowania saun marki Infraline zapewniają dodatkowo unijne
                certyfikaty: <strong>TUV/GS i CE.</strong>
              </p>

              <p>
                Od początku naszej działalności współpracujemy z profesjonalnymi europejskimi
                producentami systemów termicznych i materiałów do saun: EOS Saunatechnik GmbH, TPI
                GmbH RIEGLERSTR, Saunalux GmbH Products & CO.KG, Harvia i Tylö.
              </p>
            </div>

            <Image
              src={OfertaImg}
              alt='sauna diamond Infraline'
            />
          </section>

          <GoToOfficialPageFromContent />

          <section className='mt-6 md:mt-12 lg:mt-16'>
            <h2 className='text-2xl font-bold lg:text-3xl text-center lg:mb-2'>Oferta:</h2>
            <h3 className='text-center'>W naszej bogatej ofercie posiadamy:</h3>
            <ul className='grid [@media(min-width:440px)]:grid-cols-2 [@media(min-width:768px)]:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12 mt-4 md:mt-8 '>
              {[
                {
                  title: 'Sauny Fińskie',
                  src: FinskieImg,
                },
                {
                  title: 'Sauny Infrared',
                  src: InfraredImg,
                },
                {
                  title: 'Sauny Combi',
                  src: CombiImg,
                },
                {
                  title: 'Aranżacje Solne',
                  src: AranzacjeImg,
                },
                {
                  title: 'Sauny Ogrodowe',
                  src: OgrodoweImg,
                },
                {
                  title: 'Wyposażenie do saun',
                  src: WyposazenieDodatkoweImg,
                },
              ].map(({ title, src }) => (
                <li
                  key={title}
                  className='relative'
                >
                  <ImageWithOrnament
                    src={src}
                    title={title}
                  />
                  <h4 className='font-bold absolute bottom-0 left-0'>{title}</h4>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
