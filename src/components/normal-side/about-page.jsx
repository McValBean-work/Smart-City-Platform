
import React, { useState } from 'react';
import LandingHeader from './landing-header';

// --- STICKY CITY ILLUSTRATION COMPONENT ---
// This acts as the fixed, continuous canvas for the narrative.
const CityIllustration = ({ stage }) => {
  // Logic to determine visual state based on scroll stage
  const isProblem = stage === 'problem';
  const isSolution = stage === 'solution';
  const isValues = stage === 'values';

  // Base classes for the city container - sticky and visually isolated
  const baseClasses = "w-full h-[60vh] md:h-[80vh] bg-[#1F2937] transition-all duration-1000 overflow-hidden relative mx-auto rounded-lg shadow-2xl";
  
  // Tailwind utility classes for visualization
  const buildingBase = "absolute w-12 h-20 bg-[#E5E7EB]/10 rounded-t-sm transition-all duration-700 ease-in-out";
  const problemClasses = "border border-red-500/70 shadow-inner shadow-red-500/50 opacity-50";
  const solutionClasses = "bg-primary/40 shadow-primary/70 shadow-[0_0_25px] opacity-100 translate-y-0";

  return (
    <div className={baseClasses}>
      {/* Background Glow/Atmosphere (Subtle effect on solution) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isSolution || isValues ? 'opacity-30 bg-primary/10' : 'opacity-0'}`}></div>

      {/* Simplified Buildings - Positioned for depth */}
      <div className={`${buildingBase} top-1/4 left-[10%] ${isProblem ? problemClasses : ''} ${isSolution || isValues ? solutionClasses : 'hover:-translate-y-2'}`} style={{ height: '100px', width: '40px' }}></div>
      <div className={`${buildingBase} bottom-1/4 right-[20%] ${isProblem ? problemClasses : ''} ${isSolution || isValues ? solutionClasses : 'hover:-translate-y-2'}`} style={{ height: '150px', width: '50px' }}></div>
      <div className={`${buildingBase} top-1/2 left-1/2 -translate-x-1/2 ${isProblem ? problemClasses : ''} ${isSolution || isValues ? solutionClasses : 'hover:-translate-y-2'}`} style={{ height: '120px', width: '45px' }}></div>

      {/* The 'Healing Wave' Effect (Simplified as a fading animation on transition) */}
      <div
        className={`absolute inset-0 bg-primary/50 transition-opacity duration-1000 ease-in-out`}
        style={{
          // Visually represents the 'healing' pulse when the Solution section appears
          opacity: isSolution ? 0 : isProblem ? 0.7 : 0, 
        }}
      ></div>

      {/* Value Pillars (Section 3 - Renders when the stage is 'values') */}
      {isValues && (
        <div className="absolute inset-0 flex justify-around items-center opacity-0 animate-fadeIn delay-700">
            {/* The individual pillars from the previous design would be here */}
            <div className="text-[#E5E7EB] text-xl font-bold p-4 bg-primary/20 border-l-4 border-primary">The Three Pillars of Care are Active</div>
        </div>
      )}
    </div>
  );
};

// --- MAIN ABOUT PAGE COMPONENT ---
const AboutPage = () => {
  // State to control which visual stage the CityIllustration should be in
  const [scrollStage, setScrollStage] = useState('hero');
  const [activePillar, setActivePillar] = useState(null);

  // In a real application, you would use IntersectionObserver to update scrollStage
  // as each main section enters the viewport. For this code example, we will use
  // buttons to manually advance the state for demonstration.

  const handleManualAdvance = (stage) => {
      setScrollStage(stage);
      // In a live app, this would be scroll behavior, not a click handler
      // e.g., window.scrollTo({ top: document.getElementById(stage).offsetTop, behavior: 'smooth' });
  };
  
  const SectionContainer = ({ id, stageName, title, children }) => (
    // min-h-[150vh] ensures enough scroll space for the interaction
    <div 
        id={id} 
        className="min-h-[150vh] py-20 flex flex-col items-center justify-center relative z-20"
        // onClick={() => setScrollStage(stageName)} // Placeholder for Observer
    >
      <div className="max-w-4xl p-10 bg-[#1F2937]/95 border-l-4 border-primary backdrop-blur-sm rounded-lg shadow-2xl text-left">
        <h2 className="text-4xl font-extrabold text-primary mb-6">{title}</h2>
        <div className="text-lg text-[#E5E7EB]">
          {children}
        </div>
        {/* Manual navigation for demo purposes */}
        <button
            onClick={() => handleManualAdvance(stageName)}
            className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
            Simulate Entering '{stageName.toUpperCase()}' Stage &rarr;
        </button>
      </div>
    </div>
  );

  return (
    <>
    <LandingHeader />
    <div className="min-h-[600vh] bg-[#1F2937] text-center text-[#E5E7EB]">
      
      {/* 1. STICKY VISUAL CANVAS - Fixed to the viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-4 z-10">
        <CityIllustration stage={scrollStage} />
      </div>

      {/* 2. SCROLLABLE CONTENT SECTIONS (Overlayed on the fixed background) */}
      <div className="absolute top-0 left-0 w-full z-20">
        
        {/* HERO SECTION (Fills the first screen of scrollable content) */}
        <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center">
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
              Welcome to <span className="text-primary">OmniCity</span>
            </h1>
            <p className="text-xl max-w-2xl text-[#E5E7EB]/80 mb-12">
              Where Every Property Thrives. Witness the difference dedicated care makes, by scrolling down.
            </p>
            <button
                onClick={() => handleManualAdvance('problem')}
                className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-xl hover:shadow-2xl hover:scale-[1.05] transition-all"
            >
                Start the Journey &darr;
            </button>
        </div>


        {/* SECTION 1: THE PROBLEM */}
        <SectionContainer id="problem" stageName="problem" title="The Challenge: Before OmniCity">
          <p>Imagine a city where minor issues become <b>major headaches</b>. Tenant complaints rise. Property values dip. The vibrancy of our shared spaces fades because simple repairs are complex to manage.</p>
          <p className="mt-4 italic text-primary/80">We saw a fragmented maintenance system, and we built the centralized bridge.</p>
        </SectionContainer>
        
        {/* SECTION 2: THE SOLUTION */}
        <SectionContainer id="solution" stageName="solution" title="The OmniCity Solution: Bringing Light">
          <p>This is why <b>OmniCity exists</b>. Our platform connects property managers, owners, and service providers with <b>unparalleled efficiency</b>, ensuring every property receives the care it deserves, <b>proactively and promptly</b>.</p>
          <p className="mt-4 font-bold text-primary">Watch the issues fade as our system coordinates the repair.</p>
        </SectionContainer>

        {/* SECTION 3: THE VALUES */}
        <SectionContainer id="values" stageName="values" title="Our Values: The Pillars of Care">
          <p className="mb-8">Our entire operation is built on three unbreakable promises—to the property owner, the city manager, and the resident. Click to see the impact.</p>
          
          <div className="flex justify-center space-x-6 pt-4">
              {['Efficiency', 'Reliability', 'Community'].map((value) => (
                  <button 
                      key={value}
                      onClick={() => setActivePillar(activePillar === value ? null : value)}
                      className={`p-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${activePillar === value ? 'bg-primary text-white scale-110' : 'bg-[#E5E7EB]/10 text-[#E5E7EB] hover:bg-primary/10'}`}
                  >
                      <span className="text-lg font-bold">{value}</span>
                  </button>
              ))}
          </div>

          {activePillar && (
              <div className="mt-8 p-6 bg-white/5 text-[#E5E7EB] rounded-lg shadow-xl transition-opacity duration-500 max-w-xl mx-auto">
                  <h4 className="text-2xl font-bold mb-3 text-primary">{activePillar}</h4>
                  {activePillar === 'Efficiency' && <p>Streamlined workflows, instant communication, rapid resolutions. Get more done with less effort.</p>}
                  {activePillar === 'Reliability' && <p>A trusted, vetted network of professionals. Consistent quality and guaranteed peace of mind for every job.</p>}
                  {activePillar === 'Community' && <p>Enhancing living spaces, supporting local services, and building a better, vibrant urban experience for all residents.</p>}
              </div>
          )}

        </SectionContainer>
        
        {/* FOOTER CALL TO ACTION */}
        <div className="min-h-screen py-40 flex flex-col items-center justify-start">
            <h3 className="text-5xl font-bold text-primary mb-6">Ready to Build a Better City?</h3>
            <p className="text-2xl text-[#E5E7EB]/100 mb-10">Start experiencing maintenance that proactively cares.</p>
            <button
                onClick={() => handleManualAdvance('hero')} // Link to Sign Up/Home in a real app
                className="px-10 py-5 bg-primary text-xl text-[#1F2937] font-bold rounded-full shadow-2xl hover:bg-primary/80 transition-all"
            >
                Get Started with OmniCity
            </button>
        </div>

      </div>
    </div>
    
    </>
    
  );
};

export default AboutPage;