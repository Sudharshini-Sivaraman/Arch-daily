import React, { useState } from 'react';
import Layout from './Layout';
const commonBackgroundStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url("https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80")',
};

const footerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: '1rem',
  color: 'white',
  marginTop: '4rem', 
};

const heroStyle = {
  ...commonBackgroundStyle,
  minHeight: '100vh',
  position: 'relative',
  paddingTop: '4rem', 
};

function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 mb-4 text-center">
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
    {
      title: 'Architectural Design',
      description:
        'We offer innovative architectural design services that blend functionality with aesthetics. Our designs are tailored to meet your unique needs and preferences.',
      image:
        'https://i.pinimg.com/originals/a3/ed/71/a3ed71def3bc46b89354b0f68f660651.jpg',
    },
    {
      title: 'Interior Design',
      description:
        'Transform your living spaces with our interior design expertise. We create harmonious interiors that reflect your style and enhance your comfort.',
      image:
        'https://img.freepik.com/premium-photo/sketch-interior-design_410516-18836.jpg?w=2000',
    },
    {
      title: 'Project Management',
      description:
        'Our experienced project managers oversee every aspect of your project, ensuring it stays on track and within budget. Leave the details to us while you focus on your vision.',
      image:
        'https://www.pngkit.com/png/detail/53-536542_we-are-an-experienced-architectural-project-management-2d.png',
    },
    {
      title: 'Consultation Services',
      description:
        'Consult with our experts for valuable insights and recommendations on architecture and design. We provide guidance to help you make informed decisions.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2083kOJi5t2DP1uK3R6eenE8lI6ZuvbWdQ&usqp=CAU',
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}


function Hero() {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const toggleNavbarMenu = () => {
    setShowNavbarMenu(!showNavbarMenu);
  };

  const toggleCards = () => {
    setShowCards(!showCards);
  };

  return (
    <Layout>
    <div>
      
      <header className="relative" style={heroStyle}>
        <div
          className="container mx-auto text-center py-16 md:py-32 relative"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-gray-700 mb-4">
            WE DESIGN YOUR SPACE
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            Best Architecture and Interior Design Services
          </p>
          <button
            className="mt-6 bg-slate-400 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg"
            onClick={toggleCards}
          >
            Get Started
          </button>
        </div>
      </header>

      {showCards && <ServicesCard />}
     
    </div>
    </Layout>
  );
}

export default Hero;
