import React from 'react';
import Link from 'next/link';
import EmailSvg from 'assets/svg/EmailSvg';
import LogoSvg from 'assets/svg/LogoSvg';
import TelephoneSvg from 'assets/svg/TelephoneSvg';
import { GoToOfficialPageFromNav } from './GoToOfficialPage';

const StyledLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      className='flex items-center gap-2 text-sm text-red-900 hover:text-red-700 transition-all duration-150 font-medium'
      href={href}
    >
      {children}
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className='border-t-4 border-red-700'>
      <ul className='max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 items-center pt-1 pb-4 md:grid-cols-3 md:py-4'>
        <li className='flex justify-center gap-8 mt-6 row-start-3 md:flex-col md:gap-0 md:row-start-1 md:mt-0'>
          <p>
            <StyledLink href='mailto:biuro@infraline.pl'>
              <EmailSvg />
              <span className='block md:animate-fadeInTop md:opacity-0'>biuro@infraline.pl</span>
            </StyledLink>
          </p>
          <p className='hidden w-52 h-px bg-red-700 my-1 animate-scaleX origin-left scale-x-0 md:block'></p>
          <p>
            <StyledLink href='tel:+48502135511'>
              <TelephoneSvg />
              <span className='block md:animate-fadeInBottom md:opacity-0'>+48 502 135 511</span>
            </StyledLink>
          </p>
        </li>
        <li className='flex justify-center row-start-1 row-end-1 md:col-start-2'>
          <Link href='https://www.infraline.pl/'>
            <LogoSvg />
          </Link>
        </li>
        <li className='flex justify-center md:justify-end'>
          <GoToOfficialPageFromNav />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
