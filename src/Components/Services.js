import React from "react";
import Layout from "./Layout";

function Services() {
  const servicesData = [
    {
      title: "Residential Architecture",
      description:
        "We specialize in designing beautiful and functional homes that suit your lifestyle.",
      imageSrc: "residential.jpg", 
    },
    {
      title: "Commercial Architecture",
      description:
        "Our commercial projects are tailored to meet the unique requirements of your business.",
      imageSrc: "commercial.jpg", 
    },
    {
      title: "Interior Design",
      description:
        "Transform your space with our interior design expertise and create a harmonious environment.",
      imageSrc: "interior.jpg", 
    },
    {
      title: "Landscape Architecture",
      description:
        "We design outdoor spaces that blend seamlessly with the natural environment.",
      imageSrc: "landscape.jpg", 
    },
    {
      title: "Renovation and Remodeling",
      description:
        "Renovate your existing space to meet your changing needs and preferences.",
      imageSrc: "renovation.jpg", 
    },
    {
      title: "Consultation and Planning",
      description:
        "Our experts provide valuable insights and planning for your architectural projects.",
      imageSrc: "consultation.jpg", 
    },
    
  ];

  return (
    <Layout>
    <div className="services">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Services</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {servicesData.map((service, index) => (
          <div className="bg-white rounded-lg shadow-lg p-4" key={index}>
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="my-10 text-center"> {/* Add margin to push down the text */}
        <p>
          Whether you're planning a new construction project or renovating an
          existing space, our experienced professionals are ready to assist you
          at every step of the way. We take pride in creating innovative and
          sustainable designs that exceed your expectations.
        </p>
        <p>Contact us today to discuss your architectural needs.</p>
      </div>
    </div>
    </Layout>
  );
}

export default Services;
