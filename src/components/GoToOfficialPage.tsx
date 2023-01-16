import React from 'react';
import Link from 'next/link';
import ArrowSvg from 'assets/svg/ArrowSvg';
import LogoWhiteSvg from 'assets/svg/LogoWhiteSvg';

export const GoToOfficialPageFromNav = () => {
  return (
    <Link
      href='https://www.infraline.pl/'
      className='
			group relative rounded-tr-lg bg-gradient-to-bl from-red-500 to-red-700 py-2 w-52 font-bold text-white text-center
			before:absolute before:h-2/3 before:w-0.5 before:bg-red-600 before:-left-1 before:-bottom-1
			after:absolute after:h-0.5 after:w-2/3 after:bg-red-600 after:-left-1 after:-bottom-1'
    >
      <span className='block group-hover:-translate-x-3 transition-all duration-300'>
        Przejdź do naszej <br />
        Oficjalnej Strony
      </span>
      <span className='absolute block right-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:translate-x-3 group-hover:opacity-100 transition-all duration-300'>
        <ArrowSvg />
      </span>
    </Link>
  );
};

export const GoToOfficialPageFromContent = () => {
  return (
    <Link
      className='group flex w-fit mx-auto my-10 sm:my-16 p-4 bg-gradient-to-bl from-red-500 to-red-700 font-bold text-white text-center'
      href='https://www.infraline.pl'
    >
      <div className='overflow-hidden relative flex items-center justify-center w-80 h-16'>
        <span className='absolute flex items-center h-full group-hover:animate-hide'>
          Sprawdź naszą oficjalną stronę
        </span>

        <span className='block scale-50 opacity-0 group-hover:animate-reveal'>
          <LogoWhiteSvg />
        </span>
      </div>
    </Link>
  );
};
