import React from "react";

export default function page() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-between text-white text-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/coworking.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center w-full h-screen text-white text-center">
  <div className="z-10 p-6 max-w-6xl mx-auto bg-opacity-90 text-white text-center flex items-center flex-col">
    <div>
      <img
        src="/cospacelogo2.png"
        alt="Office"
        className="w-full h-12 md:h-20 mb-4"
      />
    </div>

    <p className="text-2xl font-bold mt-2">
      COWORKING | <span className="text-red-600">MANAGED</span> OFFICE
    </p>
<img
        src="/sharedd.png"
        alt="Office"
        className="h-32  mb-4"
      />
    <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10">
      Coming Soon
    </h1>
    <p className="text-white text-xl md:text-2xl text-center">
      We're working hard to bring you something amazing.
      <br />
      Stay tuned!
    </p>
    <div className="flex justify-center items-center mt-4">
      <div>
        <p className="text-lg font-bold">For Enquiry :- </p>
      </div>
      <div>
        <p className="text-xl font-bold text-red-600">9557551477, 9557601477</p>
      </div>
    </div>
  </div>
</div>


      {/* Address Section */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-4">
        <p className="text-sm md:text-base text-center">
          Address: IT Park Plot No B2, Sahastradhara Road Dehradun
          <br />
          Uttarakhand 248001
        </p>
      </div>
    </div>
  );
}
