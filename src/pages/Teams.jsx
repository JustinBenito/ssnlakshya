import React, { useRef } from 'react';
import { teams } from '../data/teams';
import TeamSection from '../components/TeamSection';

const Teams = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (teamName) => {
    const element = sectionRefs.current[teamName];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div id="teams" className="min-h-screen overflow-x-hidden pt-8">
      {/* Main Header */}
      <div className="text-center w-full max-w-6xl mx-auto mt-0 mb-10">
        <h1 className="text-6xl font-bold gradient-text mb-4 text-center">MEET OUR TEAM</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
      </div>

{/* Navigation Bar */}
<div className="team-category-btns flex flex-wrap justify-center w-full max-w-5xl mx-auto mb-16 gap-x-8">
  {Object.keys(teams).map((teamName, idx) => (
    <button
      key={teamName}
      onClick={() => scrollToSection(teamName)}
      className="
        px-6 py-2 
        rounded-full 
        bg-gradient-to-r from-orange-500 to-orange-6 
        text-white font-medium 
        shadow-md 
        hover:from-orange-600 hover:to-orange-700 
        transition-all duration-300 ease-in-out 
        hover:scale-105 
        focus:ring-2 focus:ring-orange-400 focus:outline-none
      "
    >
      {teamName}
    </button>
  ))}
</div>

      {/* Team Sections */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="space-y-24">
          {Object.entries(teams).map(([teamName, members]) => (
            <div 
              key={teamName} 
              ref={(el) => (sectionRefs.current[teamName] = el)}
              className="scroll-mt-[100px] text-center"
            >
              <TeamSection 
                title={teamName} 
                members={members}
              />
            </div>
          ))}
        </div>
        {/* Footer CTA */}
    <div className="text-center mb-[-200px]">
  <div className="bg-gradient-to-r from-orange-500 to-orange-6 text-white px-10 py-5 rounded-full inline-block -mt-10">
    <p className="text-xl font-semibold">Ready to join our team?</p>
  </div>

  {/* Spacer div to push footer down */}
  <div className="h-6"></div>
</div>

      </div>
    </div>
  );
};

export default Teams;
