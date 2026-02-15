import React, { useState } from "react";
import { eventsByCategory } from "../data/eventsData";

function EventsPage() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (eventId) => {
    setFlippedCards(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge">Events</span>
          <h1 className="hero-title">
            Events of <span className="text-gradient">Lakshya</span>
          </h1>
          <p className="hero-subtitle">
            Discover our workshops, competitions, and networking opportunities
            that shape the entrepreneurs of tomorrow
          </p>
        </div>
      </section>

      {/* Events Content */}
      <div className="events-content">
        {Object.entries(eventsByCategory).map(([category, events]) => (
          <section key={category} className="category-section">
            <div className="category-header">
              <h2 className="category-title">{category}</h2>
              <div className="category-count">{events.length} events</div>
            </div>

            <div className="events-grid">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`event-card ${flippedCards[event.id] ? 'flipped' : ''}`}
                  onClick={() => toggleFlip(event.id)}
                >
                  <div className="card-inner">
                    {/* Front */}
                    <div
                      className="card-front"
                      style={{
                        backgroundImage: event.image ? `url(${event.image})` : 'none',
                      }}
                    >
                      <div className="card-overlay">
                        <div className="event-date-badge">
                          {new Date(event.dateISO).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <h3 className="event-title-card">{event.title || event.name}</h3>
                        <div className="flip-indicator">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 1l4 4-4 4"/>
                            <path d="M3 11V9a4 4 0 014-4h14"/>
                          </svg>
                          <span>Tap for details</span>
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div className="back-content">
                        <div className="event-meta">
                          <span className="date-tag">
                            {new Date(event.dateISO).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <h3 className="event-title-back">{event.title || event.name}</h3>
                        <div className="event-location">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          <span>{event.location}</span>
                        </div>
                        <p className="event-description">{event.shortDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="events-cta">
        <div className="cta-container">
          <h2>Stay Updated on Upcoming Events</h2>
          <p>Follow us on social media to never miss an opportunity</p>
          <div className="cta-buttons">
            <a
              href="https://www.instagram.com/ssnlakshya"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Follow on Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/lakshya-ssn/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .events-page {
          min-height: 100vh;
          background: #fafafa;
        }

        /* Hero */
        .events-hero {
          position: relative;
          padding: 6rem 1.5rem 4rem;
          overflow: hidden;
        }

        .events-hero .hero-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #000000 0%, #171717 50%, #262626 100%);
        }

        .events-hero .hero-gradient {
          position: absolute;
          top: -50%;
          right: -30%;
          width: 100%;
          height: 200%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 60%);
        }

        .events-hero .hero-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
          background-size: 40px 40px;
        }

        .events-hero .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .events-hero .hero-badge {
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

        .events-hero .hero-title {
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

        .events-hero .hero-subtitle {
          font-size: clamp(0.938rem, 2vw, 1.125rem);
          color: #a3a3a3;
          line-height: 1.6;
          max-width: 550px;
          margin: 0 auto;
        }

        /* Content */
        .events-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }

        .category-section {
          margin-bottom: 4rem;
        }

        .category-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e5e5e5;
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #171717;
        }

        .category-count {
          font-size: 0.875rem;
          color: #737373;
          background: #f5f5f5;
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        /* Event Card */
        .event-card {
          height: 380px;
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

        .event-card.flipped .card-inner {
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
          background: linear-gradient(135deg, #171717, #262626);
          background-size: cover;
          background-position: center;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
        }

        .event-date-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #f97316;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .event-title-card {
          font-size: 1.375rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .flip-indicator {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.813rem;
        }

        .card-back {
          background: white;
          transform: rotateY(180deg);
          border: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
        }

        .back-content {
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .event-meta {
          margin-bottom: 1rem;
        }

        .date-tag {
          display: inline-block;
          background: #fff7ed;
          color: #f97316;
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
          font-size: 0.813rem;
          font-weight: 600;
        }

        .event-title-back {
          font-size: 1.25rem;
          font-weight: 700;
          color: #171717;
          margin-bottom: 0.75rem;
        }

        .event-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #737373;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .event-location svg {
          color: #f97316;
        }

        .event-description {
          font-size: 0.938rem;
          color: #525252;
          line-height: 1.6;
          flex: 1;
        }

        /* CTA Section */
        .events-cta {
          background: linear-gradient(135deg, #171717, #262626);
          padding: 4rem 1.5rem;
        }

        .cta-container {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .events-cta h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .events-cta p {
          color: #a3a3a3;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          background: #f97316;
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
        }

        .cta-btn:hover {
          background: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.5);
        }

        .cta-btn.secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: none;
        }

        .cta-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .events-hero {
            padding: 4rem 1rem 3rem;
          }

          .events-content {
            padding: 2rem 1rem;
          }

          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .events-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .event-card {
            height: 340px;
          }

          .events-cta {
            padding: 3rem 1rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default EventsPage;
