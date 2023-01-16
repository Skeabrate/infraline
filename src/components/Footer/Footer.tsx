import React from 'react';
import LogoGraySvg from 'assets/svg/LogoGraySvg';
import ArrowUpSvg from 'assets/svg/ArrowUpSvg';

const Footer = () => {
  const scrollTopHandler = () =>
    typeof window !== 'undefined' &&
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  return (
    <footer className='max-w-6xl mx-auto px-2 pb-4 md:px-6 md:pb-6 mt-20 md:mt-32 text-stone-500 flex flex-col items-center text-center'>
      <div className='w-full pb-4 border-t-[1px] border-stone-300' />
      <LogoGraySvg />
      <p>&copy; {new Date().getFullYear()}. Wszelkie prawa zastrzeżone</p>
      <button
        onClick={scrollTopHandler}
        className='flex items-center gap-2 px-4 py-4'
      >
        Do góry <ArrowUpSvg />
      </button>
    </footer>
  );
};

export default Footer;
