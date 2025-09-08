import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*   .this is navigation bar 
    .it cnotains logo features pricing faqs and login
     .the logo is at left, features pricing faqs are in between and jogin is at right */}

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

      <section className="hero-section">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <h2>Who We Are</h2>
          <p>
            We are a team dedicated to delivering top-notch solutions for our
            clients. Our mission is to turn your ideas into reality through
            technology and creative thinking.
          </p>
          <button>Get Started</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          {/* Placeholder for slideshow / live demo */}
          <div className="demo-box">Slideshow / Live Demo goes here</div>
        </div>
      </section>
      <hr />

       <section className="what-we-offer">
        <h2>What We Offer</h2>
        <p>Explore our services and offerings that help you succeed:</p>

        <div className="offer-cards">
          <div className="offer-card">
            <h3>Service 1</h3>
            <p>Short description of service 1.</p>
          </div>
          <div className="offer-card">
            <h3>Service 2</h3>
            <p>Short description of service 2.</p>
          </div>
          <div className="offer-card">
            <h3>Service 3</h3>
            <p>Short description of service 3.</p>
          </div>
        </div>
      </section>
      <hr />
      {/* ================= PRICING SECTION ================= */}
<section className="pricing-section">
  <h2>Pricing Plans</h2>
  <p>Choose the plan that fits your needs:</p>

  <table className="pricing-table" border="1" cellPadding="10" cellSpacing="0">
    <thead>
      <tr>
        <th>Plan</th>
        <th>Features</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Basic</td>
        <td>Feature A, Feature B</td>
        <td>$10/month</td>
      </tr>
      <tr>
        <td>Standard</td>
        <td>Feature A, Feature B, Feature C</td>
        <td>$20/month</td>
      </tr>
      <tr>
        <td>Premium</td>
        <td>All Features</td>
        <td>$30/month</td>
      </tr>
    </tbody>
  </table>
</section>
            <hr />
              {/* ================= FAQs SECTION ================= */}
<section className="faqs-section">
  <h2>Frequently Asked Questions</h2>
  <p>Find answers to the most common questions below:</p>

  <div className="faq-item">
    <h3>Q1: What is your service about?</h3>
    <p>A1: We provide top-notch solutions to help your business grow using innovative technology and strategies.</p>
  </div>

  <div className="faq-item">
    <h3>Q2: How can I get started?</h3>
    <p>A2: Simply click on the "Get Started" button in the hero section or contact our support team to begin.</p>
  </div>

  <div className="faq-item">
    <h3>Q3: Do you offer support after purchase?</h3>
    <p>A3: Yes! We offer 24/7 customer support and assistance for all our services and plans.</p>
  </div>
</section>

<hr />
{/* ================= MOTTO & CTA SECTION ================= */}
<section className="motto-cta-section">
  <div className="motto">
    <h2>Our Motto</h2>
    <p>"Innovating today for a smarter tomorrow."</p>
  </div>

  <div className="cta">
    <h3>Ready to get started?</h3>
    <p>Join us now and take your business to the next level.</p>
    <button>Get Started</button>
  </div>
</section>
<hr />

{/* ================= FOOTER ================= */}
<footer className="footer-section">
  <div className="footer-top">
    <div className="footer-logo">
      <h3>Logo</h3>
    </div>
    <div className="footer-links">
      <a href="#">Home</a>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">FAQs</a>
      <a href="#">Contact</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
  </div>
</footer>

    </>
  );
}

export default App;
