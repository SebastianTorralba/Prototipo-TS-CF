
import React from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
      <div 
        onClick={onFinish}
        className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
        role="button"
        aria-label="Entrar a la aplicación"
      >
        <svg 
          viewBox="0 0 400 400" 
          className="w-64 h-64 mb-6 drop-shadow-xl" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2d8a9e" />
            </marker>
          </defs>
          
          {/* Flechas circulares (Ciclo) */}
          <path d="M 200 20 A 180 180 0 0 1 355 110" fill="none" stroke="#2d8a9e" strokeWidth="8" markerEnd="url(#arrow)" />
          <path d="M 380 200 A 180 180 0 0 1 290 355" fill="none" stroke="#2d8a9e" strokeWidth="8" markerEnd="url(#arrow)" />
          <path d="M 200 380 A 180 180 0 0 1 45 290" fill="none" stroke="#2d8a9e" strokeWidth="8" markerEnd="url(#arrow)" />
          <path d="M 20 200 A 180 180 0 0 1 110 45" fill="none" stroke="#2d8a9e" strokeWidth="8" markerEnd="url(#arrow)" />

          {/* Grupo Familiar */}
          <g transform="translate(50, 60) scale(0.75)">
              {/* Brazos unidos arriba (techo) */}
              <path d="M80 140 Q60 100 120 40 L 200 0 L 280 40 Q 340 100 320 140" fill="none" stroke="#2d8a9e" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" />

              {/* Adulto Izquierda */}
              <g fill="#2d8a9e">
                  <circle cx="80" cy="80" r="30" />
                  <path d="M80 120 Q40 250 20 350 L80 350 L100 250 L120 350 L180 350 Q160 250 120 120" />
              </g>
              {/* Adulto Derecha */}
              <g fill="#2d8a9e" transform="translate(240, 0)">
                  <circle cx="80" cy="80" r="30" />
                  <path d="M80 120 Q40 250 20 350 L80 350 L100 250 L120 350 L180 350 Q160 250 120 120" />
              </g>
              {/* Niño Centro */}
              <g fill="#2d8a9e" transform="translate(120, 120) scale(0.8)">
                  <circle cx="80" cy="80" r="30" />
                  <path d="M80 120 L40 350 L120 350 Z" />
              </g>
              
              {/* Corazones */}
              <path d="M80 160 C80 140 120 140 120 160 C120 180 80 210 80 210 C80 210 40 180 40 160 C40 140 80 140 80 160" fill="#6b2e6e" transform="translate(-20, 20) scale(0.8)" />
              <path d="M80 160 C80 140 120 140 120 160 C120 180 80 210 80 210 C80 210 40 180 40 160 C40 140 80 140 80 160" fill="#6b2e6e" transform="translate(220, 20) scale(0.8)" />
              <path d="M80 160 C80 140 120 140 120 160 C120 180 80 210 80 210 C80 210 40 180 40 160 C40 140 80 140 80 160" fill="#6b2e6e" transform="translate(100, 150) scale(0.6)" />
          </g>
        </svg>
        
        <h1 className="text-3xl md:text-4xl font-bold text-teal-700 text-center tracking-wide leading-tight">
          Corresponsabilidad<br />Familiar
        </h1>
        <p className="mt-8 text-gray-400 text-sm animate-pulse font-medium">
          Toca el logo para comenzar
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
