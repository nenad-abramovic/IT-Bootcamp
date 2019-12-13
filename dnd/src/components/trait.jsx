import React from 'react'

export const Trait = ({ name, value }) => {
    const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    
    return (
        <div className="trait" style={{width:`${value/100*150}px`}}>
            <p>{capitalize(name)}: {value}</p>
        </div>
    );
}