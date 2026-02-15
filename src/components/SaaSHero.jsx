import React from 'react';
import { Link } from 'react-router-dom';
import './SaaSHero.css';

export default function SaaSHero() {
  return (
    <section className="saas-hero">
      {/* Background Animated Elements */}
      <div className="saas-hero__background">
        <div className="saas-hero__blob saas-hero__blob--1"></div>
        <div className="saas-hero__blob saas-hero__blob--2"></div>
        <div className="saas-hero__blob saas-hero__blob--3"></div>
      </div>

      {/* Content */}
      <div className="saas-hero__container">
        <div className="saas-hero__content">
          {/* Badge */}
          <div className="saas-hero__badge">
            <span className="saas-hero__badge-dot"></span>
            <span className="saas-hero__badge-text">SSN's Premier Entrepreneurship Club</span>
          </div>

          {/* Main Heading */}
          <div className="saas-hero__heading">
            <h1 className="saas-hero__title">
              Welcome to <span className="saas-hero__title-highlight">Lakshya</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="saas-hero__subtitle">
            Empowering the next generation of innovators and leaders. Your journey in entrepreneurship starts here.
          </p>

          {/* CTA Buttons */}
          <div className="saas-hero__cta">
            <a
              href="https://wa.me/918825992601?text=I%20want%20to%20be%20part%20of%20Lakshya%20community"
              target="_blank"
              rel="noopener noreferrer"
              className="saas-hero__btn saas-hero__btn--primary"
            >
              <span className="saas-hero__btn-text">Get Membership</span>
            </a>
            <Link to="/events" className="saas-hero__btn saas-hero__btn--secondary">
              <span className="saas-hero__btn-text">Explore Events</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="saas-hero__stats">
            <div className="saas-hero__stat">
              <div className="saas-hero__stat-number">500+</div>
              <div className="saas-hero__stat-label">Active Members</div>
            </div>
            <div className="saas-hero__stat">
              <div className="saas-hero__stat-number">10+</div>
              <div className="saas-hero__stat-label">Events Hosted</div>
            </div>
            <div className="saas-hero__stat">
              <div className="saas-hero__stat-number">10+</div>
              <div className="saas-hero__stat-label">Years Strong</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
