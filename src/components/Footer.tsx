import React from 'react';
import LogoGraySvg from 'assets/svg/LogoGraySvg';
import ArrowUpSvg from 'assets/svg/ArrowUpSvg';
import Link from 'next/link';

const Footer = () => {
  const scrollTopHandler = () =>
    typeof window !== 'undefined' &&
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  return (
    <footer className='max-w-6xl mx-auto px-4 md:px-6 pb-4 md:pb-6 mt-20 md:mt-32 text-gray-400 flex flex-col items-center text-center'>
      <div className='w-full pb-4 border-t-[1px] border-gray-300' />
      <Link href='https://www.infraline.pl/'>
        <LogoGraySvg />
      </Link>
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
