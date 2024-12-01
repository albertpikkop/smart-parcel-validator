import React, { useState } from 'react';

const LandingPage = () => {
  const [zipCode, setZipCode] = useState('');

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="hero bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Streamline Your Shipping with Smart Parcel Validation
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Save time, reduce errors, and improve your shipping experience with our intelligent parcel validator.
          </p>
          <div className="mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Try It Out</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Enter a Zip Code
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Type a zip code below to see how the smart parcel validator works:
            </p>
          </div>

          <div className="mt-10">
            <input
              type="text"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter zip code"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
            <p className="mt-2 text-sm text-gray-500">
              Example: {zipCode ? zipCode : '10001'}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Instant Validation</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Real-Time Zip Code Verification
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our smart parcel validator instantly verifies the origin and destination zip codes as you type, ensuring that your shipping addresses are accurate and up-to-date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
