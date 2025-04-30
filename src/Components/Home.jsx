import React from 'react';
import ModalComponent from './ModalComponent';
import { useAuth } from './Authcontext';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>HOME</h1>
      <ModalComponent showTrigger={isAuthenticated}>
        <img src="/Images/login3.gif" alt="" />
      </ModalComponent>
      <h1>HOME from the raj</h1>
    </div>
  );
}
