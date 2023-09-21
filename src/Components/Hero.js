import React from 'react';

const commonBackgroundStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url("https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80")',
};

const headerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '1rem',
  color: 'white',
};

const footerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: '1rem',
  color: 'white',
};

const heroStyle = {
  ...commonBackgroundStyle,
  minHeight: '100vh',
  position: 'relative',
};

function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-4 text-center">
      <img
        src={image}
        alt={title}
        className="mx-auto mb-4 rounded-full"
        style={{ width: '150px', height: '150px' }}
      />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-base">{description}</p>
    </div>
  );
}

function ServicesCard() {
  const services = [
    // Service objects here
  ];

  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {/* ServiceCard components here */}
    </div>
  );
}

function Hero() {
  return (
    <div>
      <div style={headerStyle}>
        <nav className="lg:flex justify-between items-center py-4">
          <div className="text-white font-semibold text-2xl">Arch Daily</div>
          <ul className="lg:flex space-x-10">
            <li className="text-white hover:text-gray-300">
              <a href="#">Home</a>
            </li>
            <li className="text-white hover:text-gray-300">
              <a href="#">About</a>
            </li>
            <li className="text-white hover:text-gray-300">
              <a href="#">Services</a>
            </li>
            <li className="text-white hover:text-gray-300">
              <a href="#">Portfolio</a>
            </li>
            <li className="text-white hover:text-gray-300">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <header className="relative" style={heroStyle}>
        <div className="container mx-auto text-center py-12 lg:py-32 relative">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-700 mb-4">WE DESIGN YOUR SPACE</h1>
          <p className="text-lg lg:text-xl text-gray-700">Best Architecture and Interior Design Services</p>
          <button className="mt-6 bg-slate-400 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg">
            Get Started
          </button>
          <ServicesCard />
        </div>
      </header>
      <div style={footerStyle}>
        <footer>
          <div className="container mx-auto text-center text-white">
            <p>&copy; {new Date().getFullYear()} S Architecture. All rights reserved.</p>
            <p>Contact: contact@sarchitecture.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Hero;
