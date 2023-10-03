import React from "react";
import Layout from "./Layout";

const cardData = [
  {
    title: "Our Vision",
    content:
      "We believe that when caring, ambitious people come together, anything is possible. We stand up for and do what’s right. We challenge conventions to drive meaningful, positive progress for our clients, our industry, and our communities. While we have distinct and diverse skills and perspectives, we’re united in our endless quest to redefine what’s possible.",
  },
  {
    title: "Our Mission",
    content:
      "To integrate the entire building lifecycle into a seamless platform to redefine how the world builds. Safety is at the core of everything we do and is one of our central guiding principles. We promote and foster a culture where people truly care about one another and where everyone shares in our goal of zero incidents.",
  },
  {
    title: "Sustainability",
    content:
      "ArchDaily takes a comprehensive view of sustainability through our 5P Model to ensure that our efforts result in positive outcomes for our partners, people, projects, practices, and places. Our approach to sustainability ensures we act in a socially responsible and environmentally respectful manner and that we continually measure, evaluate, and increase sustainability efforts.",
  },
  {
    title: "Who we are",
    content:
      "We’re problem-solvers with focus. Project managers with purpose. Team players with one goal in mind: To deliver your project on time, on budget, and on vision. From small renovations to complex billion-dollar projects; from modular construction to advanced digital technologies, to cutting-edge sustainability, ArchDaily has you covered.",
  },
  {
    title: "Careers",
    content:
      "That’s the spirit that drives us. It creates our tight-knit, collaborative culture. It feeds our curiosity. And it lays the foundation for groundbreaking approaches to how we work. We value the presence of a family-oriented culture, where we support and challenge our employee owners to be their best. We work together as a team and value quality and integrity in all the work that we do.",
  },
  {
    title: "Leadership",
    content:
      "ArchDaily’s leaders come from all walks of life and business. We favorably impact people, families, and communities with our work, our projects, and our charitable efforts.  Meet the people who lead our quest for better. It’s an exciting place to be every day, and our opportunities to contribute will grow as we continue to grow around Tamilnadu.",
  },
];

const aboutPageStyle = {
  background: 'url("https://images.unsplash.com/photo-1590694150129-ee4054094d92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2t5JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: 'calc(100vh - 64px)',
  marginTop: '0rem', // Adjust for the height of your navbar
};

function About() {
  return (
    <Layout>
      <div className="container mx-auto mt-10" style={aboutPageStyle}>
        <div className="md:flex flex-wrap">
          {cardData.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 p-4">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default About;
