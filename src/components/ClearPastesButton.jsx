import React from 'react';
import { useDispatch } from 'react-redux';
import { resetAllPastes } from '../redux/pasteSlice';

const ClearPastesButton = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(resetAllPastes());
    alert('All pastes cleared!');
  };

  return (
    <button
      onClick={handleClear}
      className="p-2 rounded-2xl mt-2 bg-red-600 text-white"
    >
      Clear All Pastes (Dev Only)
    </button>
  );
};

export default ClearPastesButton;
