import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SliderArrowLeftSvg from 'assets/svg/SliderArrowLeftSvg';
import SliderArrowRightSvg from 'assets/svg/SliderArrowRightSvg';

type TText = string | React.ReactNode;

const SliderText = ({ heading, captions }: { heading: TText; captions?: TText }) => {
  return (
    <div className='px-4'>
      <h2 className='text-white text-2xl md:text-4xl font-bold leading-normal mb-2'>{heading}</h2>
      <p className='text-white text-xl md:text-2xl'>{captions}</p>
    </div>
  );
};

const slideImages = [
  {
    url: '/slider1.jpeg',
    sliderText: (
      <SliderText
        heading={
          <>
            Sauny Fińskie - Infrared - Combi <br /> Infraline
          </>
        }
        captions='Projekt - Produkcja - Montaż'
      />
    ),
  },
  {
    url: '/slider2.jpg',
    sliderText: (
      <SliderText
        heading='Lider wśród producentów saun'
        captions='Niemal 20 lat na rynku europejskim'
      />
    ),
  },
  {
    url: '/slider3.jpg',
    sliderText: (
      <SliderText
        heading='Komnaty solne i tężnie solankowe'
        captions='Nadmorski mikroklimat Infraline'
      />
    ),
  },
  {
    url: '/slider4.jpg',
    sliderText: (
      <SliderText
        heading='Sauny domowe Infraline'
        captions='Relaks, oczyszczanie, odchudzanie we własnym SPA'
      />
    ),
  },
];

const sliderProps = {
  transitionDuration: 600,
  indicators: true,
  prevArrow: (
    <button className='hidden sm:flex group w-24 h-24 items-center justify-center'>
      <SliderArrowLeftSvg />
    </button>
  ),
  nextArrow: (
    <button className='hidden sm:flex group w-24 h-24 items-center justify-center'>
      <SliderArrowRightSvg />
    </button>
  ),
};

const Slider = () => {
  return (
    <div className='slide-container'>
      <Fade {...sliderProps}>
        {slideImages.map(({ url, sliderText }, index) => (
          <div
            className='each-slide'
            key={index}
          >
            <div
              className='h-[250px] sm:h-[400px] md:h-[500px] lg:h-[60vh] lg:min-h-[500px] flex flex-col text-center items-center justify-center bg-no-repeat bg-center bg-cover'
              style={{ backgroundImage: `url(${url})` }}
            >
              {sliderText}
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;
