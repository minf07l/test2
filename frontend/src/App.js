import { useState } from "react";
import "./App.css";

function App() {
  // Array of beautiful colors for random selection
  const colors = [
    "#FF6B6B", // Red
    "#4ECDC4", // Teal
    "#45B7D1", // Blue
    "#96CEB4", // Green
    "#FECA57", // Yellow
    "#FF9FF3", // Pink
    "#F8B500", // Orange
    "#DDA0DD", // Plum
    "#98D8C8", // Mint
    "#F7DC6F", // Light Yellow
    "#BB8FCE", // Purple
    "#85C1E9", // Light Blue
    "#F8C471", // Peach
    "#82E0AA", // Light Green
    "#F1948A", // Salmon
    "#D7BDE2", // Lavender
    "#AED6F1", // Sky Blue
    "#A9DFBF", // Pastel Green
    "#F9E79F", // Cream
    "#FADBD8"  // Light Pink
  ];

  const [backgroundColor, setBackgroundColor] = useState("#4ECDC4");

  const changeBackgroundColor = () => {
    // Generate random color from the array
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];
    
    // Make sure we don't get the same color twice in a row
    if (newColor === backgroundColor) {
      changeBackgroundColor();
      return;
    }
    
    setBackgroundColor(newColor);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-4">
          🎨 Color Changer
        </h1>
        
        <p className="text-xl text-white drop-shadow-md opacity-90 max-w-md mx-auto">
          Нажмите на кнопку, чтобы изменить цвет фона!
        </p>
        
        <button
          onClick={changeBackgroundColor}
          className="
            bg-white 
            text-gray-800 
            font-bold 
            text-xl 
            px-12 
            py-6 
            rounded-full 
            shadow-2xl 
            hover:shadow-3xl 
            transform 
            hover:scale-110 
            transition-all 
            duration-300 
            ease-in-out
            hover:bg-gray-100
            active:scale-95
            border-4
            border-white
            backdrop-blur-sm
          "
        >
          ✨ Изменить цвет ✨
        </button>
        
        <div className="mt-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 max-w-xs mx-auto">
          <p className="text-white text-sm">
            Текущий цвет: <br/>
            <span className="font-mono text-lg">{backgroundColor}</span>
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-white text-center opacity-75">
        <p className="text-sm">
          Простой сайт с кнопкой для смены цвета фона 🌈
        </p>
      </div>
    </div>
  );
}

export default App;