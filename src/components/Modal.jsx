import React from 'react';

const Modal = ({ isOpen, onClose, icon, title, subtitle, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-xl relative shadow-2xl border-0 overflow-hidden animate-fade-in-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-t-3xl p-7 text-white relative flex items-center gap-4">
          {icon && (
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shadow">
              <div className="text-white text-3xl">{icon}</div>
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1 leading-tight">{title}</h3>
            {subtitle && <p className="text-gray-200 text-sm">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Content */}
        <div className="p-7 bg-white rounded-b-3xl">{children}</div>
      </div>
    </div>
  );
};

export default Modal; 