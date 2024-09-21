import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white', // White background for cards
    color: 'var(--blue)', // Dark blue text
    margin: '10px',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

    // Styles for the title
  const titleStyle: React.CSSProperties = {
    fontSize: '1.5em', // Larger size for the title
    fontWeight: 'bold', // Bold font weight
    marginBottom: '10px', // Space between title and description
  };

  // Styles for the description
  const descriptionStyle: React.CSSProperties = {
    fontSize: '1em', // Standard size for description
  };

  return (
    <div style={cardStyle}>
      <h5 style={titleStyle}>{title}</h5>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};


export default Card;
