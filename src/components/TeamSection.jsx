import React, { useState } from 'react';
import linkedinIcon from '../assets/logos/linkedin.svg';

const TeamSection = ({ title, members }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="team-section-modern">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="title-underline"></div>
      </div>

      <div className="members-grid">
        {members.map((member, index) => {
          const isFlipped = flippedIndex === index;

          return (
            <div
              key={index}
              className={`member-card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                {/* Front */}
                <div className="card-front">
                  <div className="image-container">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="member-image"
                    />
                  </div>
                  <div className="member-details">
                    <h3 className="member-name">{member.name}</h3>
                    <span className="member-role">{member.role}</span>
                    <div className="member-meta">
                      <span>{member.year}</span>
                      <span className="meta-divider"></span>
                      <span>{member.department}</span>
                    </div>
                  </div>
                  <div className="flip-hint">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 1l4 4-4 4"/>
                      <path d="M3 11V9a4 4 0 014-4h14"/>
                      <path d="M7 23l-4-4 4-4"/>
                      <path d="M21 13v2a4 4 0 01-4 4H3"/>
                    </svg>
                    <span>Tap to flip</span>
                  </div>
                </div>

                {/* Back */}
                <div className="card-back">
                  <h3 className="member-name-back">{member.name}</h3>
                  <p className="member-desc">
                    {member.desc || "Dedicated team member passionate about entrepreneurship and innovation."}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
                      <span>Connect</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .team-section-modern {
          background: white;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #f5f5f5;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .section-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #171717;
          margin-bottom: 0.75rem;
        }

        .title-underline {
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #f97316, #fb923c);
          border-radius: 2px;
          margin: 0 auto;
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          justify-items: center;
        }

        .member-card {
          width: 100%;
          max-width: 320px;
          height: 420px;
          perspective: 1000px;
          cursor: pointer;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .member-card.flipped .card-inner {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 16px;
          overflow: hidden;
        }

        .card-front {
          background: #fafafa;
          border: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1.5rem;
        }

        .card-back {
          background: linear-gradient(135deg, #171717 0%, #262626 100%);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
        }

        .image-container {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .member-image {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #f97316;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .member-card:hover .member-image {
          transform: scale(1.02);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.3);
        }

        .member-details {
          text-align: center;
          flex: 1;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #171717;
          margin-bottom: 0.5rem;
        }

        .member-role {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: white;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .member-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.813rem;
          color: #737373;
        }

        .meta-divider {
          width: 4px;
          height: 4px;
          background: #d4d4d4;
          border-radius: 50%;
        }

        .flip-hint {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: #a3a3a3;
          font-size: 0.75rem;
          margin-top: auto;
          opacity: 0.7;
        }

        .flip-hint svg {
          width: 14px;
          height: 14px;
        }

        /* Back styles */
        .member-name-back {
          font-size: 1.375rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .member-desc {
          font-size: 0.938rem;
          color: #d4d4d4;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 260px;
        }

        .linkedin-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #f97316;
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
        }

        .linkedin-btn:hover {
          background: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(249, 115, 22, 0.4);
        }

        .linkedin-icon {
          width: 18px;
          height: 18px;
          filter: brightness(0) invert(1);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .team-section-modern {
            padding: 2rem 1rem;
            border-radius: 16px;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .members-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .member-card {
            max-width: 100%;
            height: 380px;
          }

          .member-image {
            width: 120px;
            height: 120px;
          }

          .member-name {
            font-size: 1.125rem;
          }

          .card-front,
          .card-back {
            padding: 1.5rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .member-card {
            height: 360px;
          }

          .member-image {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
