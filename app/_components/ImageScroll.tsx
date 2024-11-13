"use client"
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageScrollProps {
  images: { url: string, title?: string, description?: string, }[]; // Dynamic image array passed as a prop
  containerClass?: string;  // Custom class for the container div
  imageClass?: string;      // Custom class for the Image component
  titleClass?: string;      // Custom class for the title
  descriptionClass?: string; // Custom class for the description
  slideContainerClass?: string; // Custom class for the slide container
  button?: string;           // Button text
  showButton?: boolean;     // Boolean to control button visibility
}

function ImageScroll({ images, containerClass = '', imageClass = '', titleClass = '', descriptionClass = '', slideContainerClass = '', button, showButton = false }: ImageScrollProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 0.2,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className={`w-full mt-8 overflow-hidden flex items-center justify-center ${containerClass}`}>
      {images.map((image, index) => (
        <div key={index} className={`flex gap-8 items-center justify-center ${slideContainerClass}`}>
          <Image 
            src={image.url} 
            width={400} 
            height={400} 
            alt='splash' 
            className={`rounded-lg lg:w-full object-cover md:h-auto h-[200px] ${imageClass}`}  
          />
          <div className={`flex items-start flex-col gap-6 lg:p-8 p-4`}>
            <h1 className={`lg:text-4xl text-2xl text-black ${titleClass}`}>{image.title}</h1>
            <p className={descriptionClass}>{image.description}</p>
            {/* Conditionally render the button if showButton is true */}
            {showButton && (
              <button
                type="submit"
                className="inline-block bg-[#23297F] md:px-[24px] md:py-[12px] px-6 py-2 rounded-sm md:rounded-lg text-[14px] font-medium text-white sm:w-auto"
              >
                {button}
              </button>
            )}
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default ImageScroll;
