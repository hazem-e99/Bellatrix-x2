import React from 'react';

const TrainingStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-subtle {
          animation: bounceSubtle 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        
        @keyframes swing {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(3deg) scale(1.02);
          }
          75% {
            transform: rotate(-3deg) scale(1.02);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-swing {
          animation: swing 6s ease-in-out infinite;
        }

        /* Custom Scrollbar Styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1d4ed8, #0891b2);
          box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
        }
        
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: rgba(255, 255, 255, 0.1);
        }
        
        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #2563eb rgba(255, 255, 255, 0.1);
        }
      `
    }} />
  );
};

export default TrainingStyles; 