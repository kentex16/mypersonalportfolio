import React, { useState } from 'react';
import ReactDOM from 'react-dom';




function ColorPalette({ onColorChange }) {
    const colorThemes = [
        'blue-theme',
        'green-theme',
        'orange-theme',
        'yellow-theme',
        'indigo-theme',
        'pink-theme',
        'neon-theme',
        'brown-theme'
    ];

    return (
        <div id="color-palette-container">
            {colorThemes.map((theme, index) => (
                <button key={index} onClick={() => onColorChange(theme)}>
                    {theme.replace('-theme', '')}
                </button>
            ))}
        </div>
    );
}


function switchColorTheme(themeClass) {
  
    const outerBorder = document.querySelector('.outer-border');
    const themeClasses = [
        'blue-theme',
        'green-theme',
        'orange-theme',
        'yellow-theme',
        'indigo-theme',
        'pink-theme',
        'neon-theme',
        'brown-theme'
    ];

    themeClasses.forEach((cls) => {
        outerBorder.classList.remove(cls);
    });

    outerBorder.classList.add(themeClass);
}


function toggleColorPalette() {
    const colorPalette = document.getElementById('color-palette-container');
    colorPalette.classList.toggle('hidden');
}


ReactDOM.render(
    <ColorPalette onColorChange={switchColorTheme} />,
    document.getElementById('root')
);
