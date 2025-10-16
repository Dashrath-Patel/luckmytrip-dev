// Reusable OfferCard component
import React from "react";
export
  function OfferCard({
    mainImage,
    shadeImage,
    mainText,
    location,
    subtitle,
    price,
    currency,
    fromLocation,
    drawDate,
    totalTickets,

  }) {
  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl md:w-full w-[380px] h-[340px] md:h-[360px] flex items-end mb-7 lg:mb-0 hover:shadow-2xl transition-shadow duration-300">
      {/* Background Image */}
      <img
        src={mainImage}
        alt={location}
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
      
      {/* Shade/Overlay */}
      <img
        src={shadeImage}
        alt={`${location} shade`}
        className="absolute inset-0 w-full h-full object-cover z-20"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 z-30 p-5 md:p-6 flex flex-col justify-end">
        
        {/* All content at bottom with minimal gaps */}
        <div className="flex flex-col gap-4">
          
          {/* WIN, Location and Badge Row */}
          <div className="flex justify-between items-end">
            {/* WIN Text */}
            <div className="flex-1">
              <h2 className="text-white font-extrabold text-[80px] md:text-[110px] leading-[0.75] font-berlin tracking-tight drop-shadow-lg">
                {mainText}
              </h2>
            </div>
            
            {/* Location and Badge */}
            <div className="flex flex-col items-end space-y-1">
              <h3 className="text-white font-bold text-[40px] md:text-[55px] leading-[0.85] font-berlin tracking-tight drop-shadow-lg">
                {location}
              </h3>
              <span className="inline-block bg-yellow-400 text-black font-bold py-1 px-3 md:py-2 md:px-4 rounded-lg text-xs md:text-sm whitespace-nowrap shadow-lg">
                {subtitle}
              </span>
            </div>
          </div>

          {/* Price and Tickets Row */}
          <div className="flex justify-between items-end">
            {/* Left Side - Price and Date */}
            <div className="flex flex-col space-y-2">
              {/* Price */}
              <div className="flex items-center gap-1">
                <div className="flex flex-col leading-[1.1]">
                  <span className="text-white text-sm md:text-base font-bold">Buy</span>
                  <span className="text-white text-xs md:text-sm font-medium">{currency}</span>
                </div>
                <span className="text-yellow-400 text-4xl md:text-5xl font-extrabold font-berlin leading-[0.9]">
                  {price}
                </span>
                <div className="flex flex-col leading-[1.1]">
                  <span className="text-white text-sm md:text-base font-bold">From</span>
                  <span className="text-white text-xs md:text-sm font-medium">{fromLocation}</span>
                </div>
              </div>
              
              {/* Draw Date */}
              <p className="text-white text-[10px] md:text-xs font-normal leading-[1.3] max-w-[200px]">
                Draw Date: {drawDate} or<br/>earlier if the campaign is sold out
              </p>
            </div>
            
            {/* Right Side - Total Tickets */}
            <div className="flex flex-col items-end">
              <span className="text-white text-xs md:text-sm font-bold leading-none">Total Tickets</span>
              <span className="text-yellow-400 text-5xl md:text-6xl font-extrabold font-berlin leading-[0.9] mt-0.5">
                {totalTickets}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
