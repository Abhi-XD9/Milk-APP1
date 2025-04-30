import ModalComponent from './ModalComponent';
import { useAuth } from './Authcontext';
import HomeLocation from './HomeLocation';
import { useState } from 'react';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [showLocationModal, setShowLocationModal] = useState(true);
  
  return (
    <div>
      <h1>HOME</h1>
      <ModalComponent showTrigger={isAuthenticated}>
        <img src="/Images/login3.gif" alt="" />
      </ModalComponent>
  
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {showLocationModal && <HomeLocation setShowLocationModal={setShowLocationModal} />}
      </div>
    </div>
  );
}

