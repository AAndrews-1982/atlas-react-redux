import React from 'react';
import List from './List'; // Ensure List component is imported

const Board = () => {
    // Define inline styles for the board with updated colors and layout
    const boardStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-evenly', // Adjust for even spacing
        alignItems: 'flex-start', // Align items at the start of the container
        padding: '20px',
        backgroundColor: 'var(--blue)', // Deep blue background color
        color: '#ffffff', // White text color for consistency
        width: '100%', // Full width to spread across the screen
        overflowX: 'auto', // Allows scrolling horizontally if lists exceed screen width
        gap: '10px' // Adds gap between columns
    };

    // Sample data for lists (assuming each list needs title and cards data)
    const boardData = [
        {
            title: 'To Do',
            cards: [
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' }
            ]
        },
        {
            title: 'In Progress',
            cards: [
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' }
            ]
        },
        {
            title: 'Done',
            cards: [
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' }
            ]
        }
    ];

    return (
        <div style={boardStyle}>
            {boardData.map((list, index) => (
                <List key={index} title={list.title} cards={list.cards} />
            ))}
        </div>
    );
};

export default Board;
