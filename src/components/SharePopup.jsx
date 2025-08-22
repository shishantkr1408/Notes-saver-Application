import React from 'react';
import toast from 'react-hot-toast';

const SharePopup = ({ shareLink, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[999]">
      <div className="bg-gray-900 p-8 rounded-lg min-w-[300px] text-white text-center">
        <button 
          className="text-white text-2xl font-bold mb-4 hover:text-gray-400"
          onClick={onClose}
          aria-label="Close share popup"
        >✖</button>
        <h3 className="mb-4 text-lg font-semibold">Share Link</h3>
        <input 
          type="text" 
          value={shareLink} 
          readOnly 
          className="w-[90%] p-2 mb-4 rounded text-black"
        />
        <button
          onClick={() => { navigator.clipboard.writeText(shareLink); toast.success("Link copied!"); }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-6 transition"
        >
          Copy
        </button>
        <div className="flex justify-center gap-6">
          <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareLink)}`} target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/color/48/000000/whatsapp.png" 
              alt="WhatsApp" 
              className="w-10 cursor-pointer transform transition-transform duration-100 hover:scale-110"
            />
          </a>
          <a href={`https://t.me/share/url?url=${encodeURIComponent(shareLink)}`} target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/color/48/000000/telegram-app.png" 
              alt="Telegram" 
              className="w-10 cursor-pointer transform transition-transform duration-100 hover:scale-110"
            />
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`} target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/color/48/000000/facebook.png" 
              alt="Facebook" 
              className="w-10 cursor-pointer transform transition-transform duration-100 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
