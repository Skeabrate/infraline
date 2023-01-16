import React from 'react';
import Image, { StaticImageData } from 'next/image';

const ImageWithOrnament = ({ src, title }: { src: StaticImageData; title: string }) => {
  return (
    <div className='relative after:absolute after:bottom-0 after:right-0 after:-z-0 after:w-1/3 after:h-1/3 after:bg-gradient-to-t after:from-red-500 after:to-red-700'>
      <Image
        src={src}
        alt={title}
        style={{
          width: '100%',
          objectFit: 'cover',
          scale: '0.92',
          position: 'relative',
          zIndex: '1',
          transformOrigin: 'top left',
        }}
      />
    </div>
  );
};

export default ImageWithOrnament;
