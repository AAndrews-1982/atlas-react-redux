// DeleteCardButton.tsx
import React from 'react';

interface DeleteCardButtonProps {
  onDelete: () => void; // Function to call when the button is clicked
}

const DeleteCardButton: React.FC<DeleteCardButtonProps> = ({ onDelete }) => {
  return (
    <button
      className="absolute top-2 left-2 h-[30px] w-[30px] flex items-center justify-center"
      style={{
        backgroundColor: '#0d47a1', // Deep blue background for visibility
        borderRadius: '50%', // Makes the button circular
        color: 'white', // Sets the icon color to white
        border: '2px solid white' // White border for contrast
      }}
      onClick={onDelete}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4" // Adjust the size to fit neatly in the button
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.5 9V7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v2M12 14.5v3M10 14.5v3M14 14.5v3M4.75 9h14.5M7.5 9v11.25a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V9" // Path for the trashcan
        />
      </svg>
    </button>
  );
};

export default DeleteCardButton;
