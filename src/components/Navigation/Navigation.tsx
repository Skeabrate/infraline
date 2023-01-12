import React from 'react';
import EmailSvg from 'assets/svg/EmailSvg';
import LogoSvg from 'assets/svg/LogoSvg';
import TelephoneSvg from 'assets/svg/TelephoneSvg';
import Link from 'next/link';
import ArrowSvg from 'assets/svg/ArrowSvg';

const Navigation = () => {
  return (
    <nav className='border-t-4 border-red-700'>
      <ul
        className={`
				max-w-7xl grid grid-cols-1 items-center mx-auto pt-1 py-4 px-2
				md:grid-cols-3 md:px-6 md:py-4
			`}
      >
        <li className='flex justify-center gap-8 mt-6 row-start-3 md:flex-col md:gap-0 md:row-start-1 md:mt-0'>
          <p>
            <Link
              className='flex items-center gap-2 text-sm text-red-900 hover:underline font-medium'
              href='mailto:biuro@infraline.pl'
            >
              <EmailSvg />
              <span className='block md:animate-fadeInTop md:opacity-0'>biuro@infraline.pl</span>
            </Link>
          </p>
          <p className='hidden w-52 h-px bg-red-600 my-1 animate-scaleX origin-left scale-x-0 md:block'></p>
          <p>
            <Link
              className='flex items-center gap-2 text-sm text-red-900 hover:underline font-medium'
              href='tel:+48502135511'
            >
              <TelephoneSvg />
              <span className='block md:animate-fadeInBottom md:opacity-0'>+48 502 135 511</span>
            </Link>
          </p>
        </li>
        <li
          className={`
					flex justify-center row-start-1 row-end-1
					md:col-start-2
				`}
        >
          <Link href='https://www.infraline.pl/'>
            <LogoSvg />
          </Link>
        </li>
        <li className='flex justify-center md:justify-end'>
          <Link
            href='https://www.infraline.pl/'
            className={`
							group relative rounded-tr-lg bg-red-700 py-2 w-52 font-bold  text-white text-center
							before:absolute before:h-2/3 before:w-0.5 before:bg-red-600 before:-left-1 before:-bottom-1 before:animate-scaleY before:scale-y-0 before:origin-bottom
							after:absolute after:h-0.5 after:w-2/3 after:bg-red-600 after:-left-1 after:-bottom-1 after:animate-scaleX after:scale-x-0 after:origin-left
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
