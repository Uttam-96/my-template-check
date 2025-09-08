import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    /* .this is navigation bar 
    .it cnotains logo features pricing faqs and login
     .the logo is at left, features pricing faqs are in between and jogin is at right
     */
    <div id="navbar">
      {/* this is the whole div that wraps for nagigation bar */}
      
      
      {/*
            w-full → makes the div take up the full width of the screen.
            bg-gray-900 → gives it a dark gray (almost black) background.
            text-white → sets all text inside this container to white by default.
            shadow-md → adds a medium drop shadow below the bar for depth.  
         */}
      <div id="nav" className="w-full bg-gray-900 text-white shadow-md">
        
        
        
        
      {/* 
            max-w-7xl → limits the content width to Tailwind’s 7xl size (about 80rem or 1280px), so the navbar doesn’t 
            stretch too wide on huge screens.
            mx-auto → centers the container horizontally in the page (adds automatic left/right margin).
            px-4 → adds horizontal padding (1rem) inside the container so the content isn’t flush against the edges.
            py-3 → adds vertical padding (0.75rem) inside the container for spacing top/bottom.
            flex → makes the container use Flexbox for easy horizontal alignment.
            items-center → vertically centers all flex children.
            justify-between → pushes the first child to the far left and the last child to the far right,
            with space in between.
     */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <span className="text-lg font-bold">Logo</span>
          </div>

          {/* Center - Nav Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
            <a href="#" className="hover:text-gray-300">
              Features
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-300">
              FAQs
            </a>
          </div>

          {/* Right - Login */}
          <div>
            <a href="#" className="hover:text-gray-300">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>

    

  );
}

export default App;
