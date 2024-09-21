import React from 'react';

interface DeleteListButtonProps {
  onDelete: () => void;
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ onDelete }) => {
  return (
    <button
      className="absolute top-2 right-2 h-[30px] w-[30px] flex items-center justify-center"
      style={{
        backgroundColor: 'transparent',
        borderRadius: '50%',
        border: '2px solid white',
        outline: 'none',
      }}
      onClick={onDelete}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default DeleteListButton;
