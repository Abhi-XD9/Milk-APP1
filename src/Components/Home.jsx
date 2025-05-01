import ModalComponent from './ModalComponent';
import { useAuth } from './Authcontext';
import HomeLocation from './HomeLocation';

export default function Home() {
  const { isAuthenticated, showLocationModal, setShowLocationModal } = useAuth();

  return (
    <div className="relative min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">HOME</h1>

      {/* ModalComponent with GIF */}
      <ModalComponent showTrigger={isAuthenticated}>
        <img
          src="/Images/mathu-vadalara-satya.gif"
          alt="Funny GIF"
          className="rounded-lg mx-auto max-w-full h-auto shadow-md"
        />
      </ModalComponent>

      {/* Centered HomeLocation modal */}
      {showLocationModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <HomeLocation setShowLocationModal={setShowLocationModal} />
        </div>
      )}
    </div>
  );
}
