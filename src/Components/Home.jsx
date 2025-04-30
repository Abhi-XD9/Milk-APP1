import React from 'react';
import { Button } from 'react-bootstrap';
import HomeLocation from './HomeLocation';
import { useState } from 'react';

export default function Home() {

  const [showLocationModal, setShowLocationModal] = useState(true);

  return (
    <div>
      <h1>HOME from the raj</h1>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {showLocationModal && <HomeLocation setShowLocationModal={setShowLocationModal} />}
      </div>
    </div>
  );
}

