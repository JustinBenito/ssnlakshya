"use client";
import React from 'react';
import { Events_main } from '../components/main-page/Events';
import { juniorCoreTeam, seniorCoreTeam } from '../components/main-page/CoreMembers';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import SaaSHero from '../components/SaaSHero';

const HomePage = ({ handleScroll }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <div className="home-page">
      {/* SaaS Hero */}
      <SaaSHero />

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">About Us</span>
            <h2 className="section-title">What is Lakshya?</h2>
          </div>
          <p className="section-description">
            Lakshya is the Entrepreneurship Club dedicated to fostering innovation, creativity,
            and entrepreneurial spirit among students. We provide a platform for aspiring entrepreneurs
            to collaborate, learn, and grow through workshops, events, and mentorship programs.
            Our mission is to inspire and empower individuals to turn their ideas into reality.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Workshops</h3>
              <p>Hands-on learning experiences with industry experts and successful entrepreneurs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                </svg>
              </div>
              <h3>Networking</h3>
              <p>Connect with like-minded individuals, mentors, and potential co-founders.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Competitions</h3>
              <p>Showcase your ideas and compete in exciting entrepreneurship challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section" id="events">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Our Events</span>
            <h2 className="section-title">Flagship Events</h2>
          </div>
          <div className="events-grid">
            {Events_main.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <Link to="/events" className="event-link">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section-home" id="team">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge light">Our Team</span>
            <h2 className="section-title light">Meet the Leaders</h2>
          </div>

          {/* Senior Core Team */}
          <div className="team-slider-group">
            <h3 className="team-group-title">Senior Core Team</h3>
            <Slider {...sliderSettings}>
              {seniorCoreTeam.map((member, index) => (
                <div key={index} className="team-slide">
                  <div className="team-member-card">
                    <div className="member-image-wrapper">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="member-image"
                      />
                    </div>
                    <div className="member-info">
                      <h4 className="member-name">{member.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Junior Core Team */}
          <div className="team-slider-group">
            <h3 className="team-group-title">Junior Core Team</h3>
            <Slider {...sliderSettings}>
              {juniorCoreTeam.map((member, index) => (
                <div key={index} className="team-slide">
                  <div className="team-member-card">
                    <div className="member-image-wrapper">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="member-image"
                      />
                    </div>
                    <div className="member-info">
                      <h4 className="member-name">{member.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="team-cta">
            <Link to="/team-page" className="btn-primary">
              View All Teams
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start Your Entrepreneurship Journey?</h2>
          <p className="cta-description">
            Join Lakshya today and be part of a community that believes in turning ideas into reality.
          </p>
          <a
            href="https://wa.me/918825992601?text=I%20want%20to%20be%20part%20of%20Lakshya%20community"
            className="btn-primary large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a Member
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      <style>{`
        .home-page {
          width: 100%;
          overflow-x: hidden;
        }

        /* Section Styles */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-badge {
          display: inline-block;
          padding: 0.375rem 0.875rem;
          background: #fff7ed;
          color: #f97316;
          border-radius: 50px;
          font-size: 0.813rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-badge.light {
          background: rgba(249, 115, 22, 0.1);
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #171717;
          letter-spacing: -0.02em;
        }

        .section-title.light {
          color: white;
        }

        .section-description {
          font-size: 1.125rem;
          color: #525252;
          line-height: 1.8;
          max-width: 720px;
          margin: 0 auto 3rem;
          text-align: center;
        }

        /* About Section */
        .about-section {
          padding: 6rem 1.5rem;
          background: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2rem;
          background: #fafafa;
          border-radius: 16px;
          border: 1px solid #f5f5f5;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border-color: #fed7aa;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f97316, #fb923c);
          border-radius: 12px;
          margin-bottom: 1.25rem;
          color: white;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #171717;
          margin-bottom: 0.75rem;
        }

        .feature-card p {
          font-size: 0.938rem;
          color: #525252;
          line-height: 1.6;
        }

        /* Events Section */
        .events-section {
          padding: 6rem 1.5rem;
          background: #fafafa;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .event-card {
          padding: 2rem;
          background: white;
          border-radius: 16px;
          border: 1px solid #f5f5f5;
          transition: all 0.3s ease;
        }

        .event-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border-color: #fed7aa;
        }

        .event-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #171717, #262626);
          border-radius: 14px;
          margin-bottom: 1.5rem;
          color: #f97316;
        }

        .event-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #171717;
          margin-bottom: 0.75rem;
        }

        .event-description {
          font-size: 0.938rem;
          color: #525252;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .event-link {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          color: #f97316;
          font-weight: 500;
          font-size: 0.875rem;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .event-link:hover {
          gap: 0.5rem;
        }

        /* Team Section */
        .team-section-home {
          padding: 6rem 1.5rem;
          background: linear-gradient(135deg, #171717, #262626);
        }

        .team-slider-group {
          margin-bottom: 3rem;
        }

        .team-group-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #a3a3a3;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .team-slide {
          padding: 0.5rem;
        }

        .team-member-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .team-member-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .member-image-wrapper {
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
        }

        .member-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .team-member-card:hover .member-image {
          transform: scale(1.05);
        }

        .member-info {
          padding: 1rem;
          text-align: center;
        }

        .member-name {
          font-size: 1rem;
          font-weight: 600;
          color: #171717;
          margin: 0;
        }

        .team-cta {
          text-align: center;
          margin-top: 2rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: #f97316;
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.938rem;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          background: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.5);
        }

        .btn-primary.large {
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 1.5rem;
          background: linear-gradient(135deg, #f97316, #ea580c);
        }

        .cta-container {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-title {
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .cta-description {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }

        .cta-section .btn-primary {
          background: white;
          color: #f97316;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
        }

        .cta-section .btn-primary:hover {
          background: #fafafa;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-section,
          .events-section,
          .team-section-home,
          .cta-section {
            padding: 4rem 1rem;
          }

          .features-grid,
          .events-grid {
            grid-template-columns: 1fr;
          }

          .btn-primary {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }

        /* Slider Overrides */
        .team-section-home .slick-dots li button:before {
          color: #737373;
        }

        .team-section-home .slick-dots li.slick-active button:before {
          color: #f97316;
        }

        .team-section-home .slick-prev:before,
        .team-section-home .slick-next:before {
          color: #f97316;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
