// HomePage.jsx
"use client";
import React from 'react';
import { Events_main } from '../components/main-page/Events';
import EventCards from '../components/main-page/EventCards';
import { juniorCoreTeam, seniorCoreTeam } from '../components/main-page/CoreMembers';
import CoreCards from '../components/main-page/CoreCards';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = ({ handleScroll }) => {
  return (
    <div className="app-container">
      {/* <iframe
        src="https://my.spline.design/tvatimedoor-QHzG0oAgnGc3mChstHAoZu7K/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="spline-background"
      ></iframe> */}
    {/* Welcome Section */}
<section className="welcome-section animate-section flex justify-center">
  <div className="container">
    <h1 className="welcome-title">Welcome to Lakshya</h1>
    <p className="welcome-subtitle mb-16">
      Your journey in entrepreneurship starts here!
    </p>
    <a href="https://youtu.be/dQw4w9WgXcQ?si=GI3CZn8101iSYMyJ" className="membership-button mt-16 block">
       Get Membership
    </a>
  </div>
</section>

{/* Divider */}
     <hr className="my-8 border-t-2 border-gray-300" />

      {/* Hero Section */}
      {/* <section className="hero-section animate-section">
        <div className="container text-center">
          <h1 className="hero-title">Lakshya Entrepreneurship Club</h1>
          <p className="hero-subtitle">Empowering the next generation of innovators and leaders</p>
          <a href="#about" className="hero-button">Learn More</a>
        </div>
      </section> */}

      {/* What is Lakshya Section */}
      <section id="about" className="about-section animate-section">
        <div className="container">
          <h2 className="section-title">What is Lakshya?</h2>
          <p className="section-text">
            Lakshya is the Entrepreneurship Club dedicated to fostering innovation, creativity, and entrepreneurial spirit among students. We provide a platform for aspiring entrepreneurs to collaborate, learn, and grow through workshops, events, and mentorship programs. Our mission is to inspire and empower individuals to turn their ideas into reality.
          </p>
        </div>
      </section>
      
      {/* Divider */}
     <hr className="my-8 border-t-2 border-gray-300" />

      {/* Events Section */}
      <section id="events" className="events-section animate-section">
        <div className="container">
          <h2 className="section-title">Events of Lakshya</h2>
          <div className="events-grid">
            {Events_main.map((event, index) => (
              <EventCards
                key={index}
                title={event.title}
                description={event.description}
              />
            ))}
          </div>
        </div>
      </section>

    
     {/* Divider */}
     <hr className="my-8 border-t-2 border-gray-300" />

      {/* Teams Section */}
     <section className="teams-section animate-section py-12" style={{ backgroundColor: "#2d2d2d" }}>
  <div className="container">
    <h2 className="section-title text-3xl font-bold text-center text-orange-800 mb-10">
      The Team
    </h2>

    {/* Senior Core Team */}
    <div className="team-group mb-16">
      <h3 className="team-title text-2xl font-semibold text-orange-900 mb-6">
        Senior Core Team
      </h3>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={5}
        slidesToScroll={1}
        responsive={[
          { breakpoint: 1280, settings: { slidesToShow: 3 } },
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 640, settings: { slidesToShow: 1 } },
        ]}
      >
        {seniorCoreTeam.map((member, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden text-center transition-transform hover:scale-105">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 bg-gradient-to-t from-orange-100 via-white to-orange-50">
                <h4 className="text-lg font-semibold text-orange-900">{member.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Junior Core Team */}
    <div className="team-group">
      <h3 className="team-title text-2xl font-semibold text-orange-900 mb-6">
        Junior Core Team
      </h3>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={5}
        slidesToScroll={1}
        responsive={[
          { breakpoint: 1280, settings: { slidesToShow: 3 } },
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 640, settings: { slidesToShow: 1 } },
        ]}
      >
        {juniorCoreTeam.map((member, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden text-center transition-transform hover:scale-105">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 bg-gradient-to-t from-orange-100 via-white to-orange-50">
                <h4 className="text-lg font-semibold text-orange-900">{member.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;
