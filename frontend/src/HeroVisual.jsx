import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

// Scattered start offsets for each piece: [dx, dy, rotate, delay]
const PIECES = {
  window: [-46, -34, -5, 0.15],
  tile1: [64, -48, 11, 0.55],
  tile2: [78, 10, -8, 0.7],
  tile3: [58, 56, 13, 0.85],
  folder1: [-72, 52, -12, 1.0],
  folder2: [-38, 74, 9, 1.15],
  mail1: [34, 78, -10, 1.3],
  mail2: [82, 62, 12, 1.45]
};

const Piece = ({ name, animate, children }) => {
  const [dx, dy, rot, delay] = PIECES[name];
  if (!animate) return <g>{children}</g>;
  return (
    <motion.g
      initial={{ x: dx, y: dy, rotate: rot, opacity: 0, scale: 0.92 }}
      animate={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
      style={{ originX: '50%', originY: '50%' }}
    >
      {children}
    </motion.g>
  );
};

const Connector = ({ d, animate, delay }) =>
  animate ? (
    <motion.path
      d={d}
      fill="none"
      stroke="#ff6a00"
      strokeWidth="1.6"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.85 }}
      transition={{ duration: 0.7, delay, ease: 'easeInOut' }}
    />
  ) : (
    <path d={d} fill="none" stroke="#ff6a00" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
  );

const PhotoTile = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width="62" height="58" rx="10" fill="#141414" stroke="rgba(255,255,255,0.12)" />
    <rect x="6" y="6" width="50" height="46" rx="7" fill="rgba(255,255,255,0.04)" />
    <circle cx="20" cy="20" r="5" fill="#ff6a00" opacity="0.75" />
    <path d="M10 46 L24 30 L34 40 L42 32 L52 46 Z" fill="rgba(255,255,255,0.16)" />
  </g>
);

const Folder = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <path
      d="M4 12a6 6 0 0 1 6-6h22l8 9h38a6 6 0 0 1 6 6v33a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6Z"
      fill="#141414"
      stroke="rgba(255,255,255,0.12)"
    />
    <rect x="16" y="30" width="46" height="5" rx="2.5" fill="rgba(255,255,255,0.16)" />
    <rect x="16" y="41" width="30" height="5" rx="2.5" fill="#ff6a00" opacity="0.6" />
  </g>
);

const Envelope = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width="84" height="56" rx="10" fill="#141414" stroke="rgba(255,255,255,0.12)" />
    <path d="M8 18 L42 38 L76 18" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round" />
    <rect x="8" y="44" width="26" height="4" rx="2" fill="#ff6a00" opacity="0.6" />
  </g>
);

export const HeroVisual = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReduced = useReducedMotion();

  const animate = !prefersReduced && inView;

  return (
    <div ref={ref} className="relative w-full" data-testid="hero-visual">
      {/* Reserved aspect ratio prevents layout shift */}
      <div className="relative w-full" style={{ aspectRatio: '46 / 37' }}>
        <svg
          viewBox="0 0 460 370"
          className="absolute inset-0 w-full h-full select-none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="jf-band" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ff6a00" stopOpacity="0.08" />
            </linearGradient>
            <radialGradient id="jf-glow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse cx="230" cy="170" rx="225" ry="180" fill="url(#jf-glow)" />

          {/* Connecting lines - drawn last in the story, sit under the shapes */}
          <g>
            <Connector d="M300 104 C318 104 316 66 332 66" animate={animate} delay={2.35} />
            <Connector d="M300 134 C318 134 316 140 332 140" animate={animate} delay={2.5} />
            <Connector d="M300 168 C318 168 316 212 332 212" animate={animate} delay={2.65} />
            <Connector d="M78 232 C78 250 74 252 74 268" animate={animate} delay={2.8} />
            <Connector d="M172 232 C172 250 172 252 172 268" animate={animate} delay={2.9} />
            <Connector d="M264 232 C264 250 264 252 264 268" animate={animate} delay={3.0} />
            <Connector d="M300 196 C346 196 366 232 366 268" animate={animate} delay={3.1} />
          </g>

          {/* Website miniature - abstract, not a real project */}
          <Piece name="window" animate={animate}>
            <rect x="30" y="38" width="270" height="194" rx="16" fill="#111111" stroke="rgba(255,255,255,0.14)" />
            <path
              d="M30 54a16 16 0 0 1 16-16h238a16 16 0 0 1 16 16v14H30Z"
              fill="rgba(255,255,255,0.05)"
            />
            <circle cx="50" cy="53" r="3.6" fill="#ff6a00" opacity="0.85" />
            <circle cx="62" cy="53" r="3.6" fill="rgba(255,255,255,0.22)" />
            <circle cx="74" cy="53" r="3.6" fill="rgba(255,255,255,0.22)" />
            <rect x="92" y="47" width="120" height="12" rx="6" fill="rgba(255,255,255,0.07)" />

            <rect x="44" y="80" width="242" height="54" rx="10" fill="url(#jf-band)" />
            <rect x="58" y="94" width="96" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
            <rect x="58" y="110" width="62" height="6" rx="3" fill="rgba(255,255,255,0.22)" />
            <rect x="228" y="98" width="44" height="16" rx="8" fill="#ff6a00" opacity="0.9" />

            <rect x="44" y="146" width="74" height="52" rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />
            <rect x="128" y="146" width="74" height="52" rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />
            <rect x="212" y="146" width="74" height="52" rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />
            <rect x="56" y="180" width="38" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
            <rect x="140" y="180" width="38" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
            <rect x="224" y="180" width="38" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
            <circle cx="62" cy="162" r="6" fill="#ff6a00" opacity="0.55" />
            <circle cx="146" cy="162" r="6" fill="rgba(255,255,255,0.25)" />
            <circle cx="230" cy="162" r="6" fill="rgba(255,255,255,0.25)" />
            <rect x="44" y="210" width="242" height="6" rx="3" fill="rgba(255,255,255,0.07)" />
          </Piece>

          {/* Photo tiles */}
          <Piece name="tile1" animate={animate}>
            <PhotoTile x={332} y={38} />
          </Piece>
          <Piece name="tile2" animate={animate}>
            <PhotoTile x={332} y={112} />
          </Piece>
          <Piece name="tile3" animate={animate}>
            <PhotoTile x={332} y={186} />
          </Piece>

          {/* Folders and email */}
          <Piece name="folder1" animate={animate}>
            <Folder x={30} y={268} />
          </Piece>
          <Piece name="folder2" animate={animate}>
            <Folder x={126} y={268} />
          </Piece>
          <Piece name="mail1" animate={animate}>
            <Envelope x={222} y={272} />
          </Piece>
          <Piece name="mail2" animate={animate}>
            <Envelope x={324} y={272} />
          </Piece>
        </svg>
      </div>
    </div>
  );
};

export default HeroVisual;
