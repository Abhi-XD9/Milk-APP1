import React, { useState } from 'react';

function SelectLocation({ setShowLocationModal }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const popularCities = [
    { name: 'Hyderabad', icon: '🏰' },      // Telangana
    { name: 'Warangal', icon: '🕌' },       // Telangana
    { name: 'Nizamabad', icon: '🏛️' },     // Telangana
    { name: 'Karimnagar', icon: '⛪' },     // Telangana
    { name: 'Vijayawada', icon: '🌆' },     // Andhra Pradesh
    { name: 'Guntur', icon: '🏯' },         // Andhra Pradesh
    { name: 'Visakhapatnam', icon: '🗽' },  // Andhra Pradesh
    { name: 'Tirupati', icon: '🏟️' },      // Andhra Pradesh
  ];


  const handleSelect = (city) => {
    setSelectedLocation(city);
    setShowLocationModal(false);
    // Add further logic here if needed (e.g., API call or state management)
  };

  return (
   
      <div className='bg-white p-6 rounded-lg shadow-lg w-[400px]'>
        <h1 className='text-2xl font-bold mb-2'>Select Location</h1>
        <p className='text-gray-600 mb-4'>Provide your location to serve you better</p>
        
        <div className='flex flex-col gap-6'>
          {/* Popular Cities */}
          <div>
            <h2 className='text-lg font-semibold mb-2'>Popular Cities</h2>
            <div className='grid grid-cols-2 gap-2'>
              {popularCities.map((city) => (
                <button
                  key={city.name}
                  className='bg-white border border-gray-300 p-2 rounded flex items-center gap-2 hover:bg-gray-100'
                  onClick={() => handleSelect(city.name)}
                >
                  <span>{city.icon}</span>
                  <span>{city.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {selectedLocation && (
          <p className='mt-4 text-green-600'>Selected location: {selectedLocation}</p>
        )}
        <button onClick={() => setShowLocationModal(false)}>X</button>
      </div>
   
  );
}

export default SelectLocation;