import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ReferralModal from "./components/ReferralModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <HeroSection onReferNowClick={handleModalOpen} />
      <ReferralModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default App;
