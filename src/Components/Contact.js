import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faFax,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import Layout from './Layout';
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };
  const headerStyle = {
    // ... (other styles)
    paddingTop: 'calc(4rem + 64px)', // Adjust the paddingTop to bring it below the navbar
  };
  return (
    <Layout>
    <div
      className="container mx-auto mt-8 flex justify-center items-center"
      style={{
        background: 'url("https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the background image
        minHeight: 'calc(100vh - 64px)',
        paddingTop: 'calc(4rem + 64px)',
    marginTop: '0rem',
      }}
      
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="mb-4">
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
              Company Address: 123 Company St, City, Country
            </p>
          </div>
          <div className="mb-4">
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Company Phone: +1 (123) 456-7890
            </p>
          </div>
          <div className="mb-4">
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
              Mobile: +1 (987) 654-3210
            </p>
          </div>
          <div className="mb-4">
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faFax} className="mr-2" />
              Fax: +1 (555) 123-4567
            </p>
          </div>
          <div className="mb-4">
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email: contact@example.com
            </p>
          </div>
          
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow-lg mt-4 md:mt-0">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default ContactPage;
