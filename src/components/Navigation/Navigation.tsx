import React from 'react';
import EmailSvg from 'assets/svg/EmailSvg';
import LogoSvg from 'assets/svg/LogoSvg';
import TelephoneSvg from 'assets/svg/TelephoneSvg';
import Link from 'next/link';
import ArrowSvg from 'assets/svg/ArrowSvg';

const Navigation = () => {
  return (
    <nav className='border-t-4 border-red-700'>
      <ul className='max-w-7xl grid grid-cols-3 items-center mx-auto py-4 px-6'>
        <li>
          <p>
            <Link
              className='flex items-center gap-2 text-sm text-red-900 hover:underline font-medium'
              href='mailto:biuro@infraline.pl'
            >
              <EmailSvg />
              <span className='block animate-fadeInTop opacity-0'>biuro@infraline.pl</span>
            </Link>
          </p>
          <p className='w-52 h-px bg-red-600 my-1 animate-scaleX origin-left opacity-0'></p>
          <p>
            <Link
              className='flex items-center gap-2 text-sm text-red-900 hover:underline font-medium'
              href='tel:+48502135511'
            >
              <TelephoneSvg />
              <span className='block animate-fadeInBottom opacity-0'>+48 502 135 511</span>
            </Link>
          </p>
        </li>
        <li className='flex justify-center'>
          <Link href='https://www.infraline.pl/'>
            <LogoSvg />
          </Link>
        </li>
        <li className='flex justify-end'>
          <Link
            href='https://www.infraline.pl/'
            className={`group relative rounded-tr-lg bg-red-700 py-2 w-52 font-bold text-white text-center 
							before:absolute before:h-2/3 before:w-0.5 before:bg-red-600 before:-left-1 before:-bottom-1 before:animate-scaleY before:opacity-0 before:origin-bottom
							after:absolute after:h-0.5 after:w-2/3 after:bg-red-600 after:-left-1 after:-bottom-1 after:animate-scaleX after:opacity-0 after:origin-left
						`}
          >
            <span className='block group-hover:-translate-x-3 transition-all duration-300'>
              Przejdź do naszej <br />
              Oficjalnej Strony
            </span>
            <span className='absolute block right-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:translate-x-3 group-hover:opacity-100 transition-all duration-300'>
              <ArrowSvg />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
