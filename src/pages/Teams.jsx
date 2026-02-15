import React, { useRef, useState } from 'react';
import { teams } from '../data/teams';
import TeamSection from '../components/TeamSection';

const Teams = () => {
  const sectionRefs = useRef({});
  const [activeTeam, setActiveTeam] = useState(null);

  const scrollToSection = (teamName) => {
    setActiveTeam(teamName);
    const element = sectionRefs.current[teamName];
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="teams-page">
      {/* Hero Section */}
      <section className="teams-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge">Our Team</span>
          <h1 className="hero-title">
            Meet the <span className="text-gradient">Team</span>
          </h1>
          <p className="hero-subtitle">
            The passionate individuals driving innovation and entrepreneurship at Lakshya
          </p>
        </div>
      </section>

      {/* Navigation Bar */}
      <div className="teams-nav-wrapper">
        <nav className="teams-nav">
          {Object.keys(teams).map((teamName) => (
            <button
              key={teamName}
              onClick={() => scrollToSection(teamName)}
              className={`nav-btn ${activeTeam === teamName ? 'active' : ''}`}
            >
              {teamName}
            </button>
          ))}
        </nav>
      </div>

      {/* Team Sections */}
      <div className="teams-content">
        <div className="teams-container">
          {Object.entries(teams).map(([teamName, members]) => (
            <div
              key={teamName}
              ref={(el) => (sectionRefs.current[teamName] = el)}
              className="team-section-wrapper"
            >
              <TeamSection
                title={teamName}
                members={members}
              />
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <section className="join-cta">
          <div className="cta-content">
            <h2>Want to join our team?</h2>
            <p>Be part of the next generation of innovators and leaders</p>
            <a
              href="https://youtu.be/dQw4w9WgXcQ?si=GI3CZn8101iSYMyJ"
              className="cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </section>
      </div>

      <style>{`
        .teams-page {
          min-height: 100vh;
          background: #fafafa;
        }

        /* Hero Section */
        .teams-hero {
          position: relative;
          padding: 6rem 1.5rem 4rem;
          overflow: hidden;
        }

        .teams-hero .hero-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #000000 0%, #171717 50%, #262626 100%);
        }

        .teams-hero .hero-gradient {
          position: absolute;
          top: -50%;
          right: -30%;
          width: 100%;
          height: 200%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 60%);
        }

        .teams-hero .hero-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
          background-size: 40px 40px;
        }

        .teams-hero .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .teams-hero .hero-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 50px;
          color: #f97316;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }

        .teams-hero .hero-title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .text-gradient {
          background: linear-gradient(135deg, #f97316, #fb923c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .teams-hero .hero-subtitle {
          font-size: clamp(0.938rem, 2vw, 1.125rem);
          color: #a3a3a3;
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Navigation */
        .teams-nav-wrapper {
          position: sticky;
          top: 65px;
          z-index: 100;
          background: white;
          border-bottom: 1px solid #e5e5e5;
          padding: 1rem 0;
        }

        .teams-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .nav-btn {
          padding: 0.5rem 1rem;
          background: transparent;
          color: #525252;
          border: 1px solid #e5e5e5;
          border-radius: 50px;
          font-size: 0.813rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .nav-btn:hover {
          border-color: #f97316;
          color: #f97316;
        }

        .nav-btn.active {
          background: #f97316;
          color: white;
          border-color: #f97316;
        }

        /* Content */
        .teams-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem;
        }

        .teams-container {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .team-section-wrapper {
          scroll-margin-top: 140px;
        }

        /* Join CTA */
        .join-cta {
          margin-top: 4rem;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #171717, #262626);
          border-radius: 24px;
          text-align: center;
        }

        .cta-content h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .cta-content p {
          color: #a3a3a3;
          margin-bottom: 2rem;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          background: #f97316;
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.938rem;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
        }

        .cta-btn:hover {
          background: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.5);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .teams-hero {
            padding: 4rem 1rem 3rem;
          }

          .teams-nav-wrapper {
            top: 58px;
          }

          .teams-nav {
            gap: 0.375rem;
          }

          .nav-btn {
            padding: 0.375rem 0.75rem;
            font-size: 0.75rem;
          }

          .teams-content {
            padding: 2rem 0.75rem;
          }

          .team-section-wrapper {
            scroll-margin-top: 120px;
          }

          .join-cta {
            padding: 3rem 1.5rem;
            border-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Teams;
