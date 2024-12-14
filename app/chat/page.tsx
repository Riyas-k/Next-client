import React from 'react';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const AIAssistant: React.FC = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden pb-4 font-medium bg-white min-h-screen">
    <MainContent />
    <Footer />
  </div>
  
  );
};

export default AIAssistant;