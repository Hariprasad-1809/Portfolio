import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiFastapi, SiPostgresql, SiGoogle, SiLangchain } from 'react-icons/si';

/**
 * Premium 3D Isometric Composition for Hero Section.
 * Implements 3D Depth using floating glass cards, rounded cylinders/spheres, 
 * abstract AI node connectors, translucent panels, and floating technology chips.
 */
const Hero3DComposition = () => {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] flex items-center justify-center perspective-1000 select-none">
      
      {/* Background Animated Neural Network Node Ring */}
      <motion.div
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border border-blue-500/10 dark:border-blue-400/10 border-dashed pointer-events-none"
      />

      {/* 3D Floating Sphere Marker 1 (Top Right) */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 right-8 w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-transparent border border-cyan-400/30 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.25)] pointer-events-none z-10"
      />

      {/* 3D Floating Glass Cube Visual Marker (Bottom Left) */}
      <motion.div
        animate={{
          rotateX: [0, 15, 0],
          rotateY: [0, 20, 0],
          y: [0, 10, 0],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-4 w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600/30 via-blue-500/20 to-transparent border border-purple-400/30 backdrop-blur-md shadow-[0_0_25px_rgba(124,58,237,0.25)] pointer-events-none z-10"
      />

      {/* Main Container with 3D Rotation */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotateX: [6, 2, 6],
          rotateY: [-8, -4, -8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full max-w-[460px] h-[380px] sm:h-[420px] rounded-3xl p-4 sm:p-6 flex flex-col justify-between"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer 1: Code Snippet Glass Card (Top Floating Translucent Panel) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="glass-card p-4 sm:p-5 rounded-3xl border border-slate-900/10 dark:border-white/15 shadow-2xl bg-white/80 dark:bg-[#0F172A]/85 backdrop-blur-2xl relative z-20"
        >
          {/* Window Bar Header */}
          <div className="flex items-center justify-between mb-3 border-b border-slate-200/60 dark:border-slate-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                agent_core.py
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              RAG Engine Active
            </div>
          </div>

          {/* Code Text */}
          <pre className="font-mono text-[11px] sm:text-xs leading-relaxed text-slate-800 dark:text-slate-200 overflow-x-auto">
            <code>
              <span className="text-blue-500 font-semibold">@app.post</span>(<span className="text-emerald-500">"/rag/query"</span>)<br />
              <span className="text-purple-500 font-semibold">async def</span> <span className="text-amber-500">synthesize</span>(q: Prompt):<br />
              &nbsp;&nbsp;vec = <span className="text-cyan-500">gemini</span>.embed(q.text)<br />
              &nbsp;&nbsp;docs = <span className="text-purple-500">await</span> chroma.search(vec)<br />
              &nbsp;&nbsp;<span className="text-purple-500">return</span> <span className="text-blue-500">LLM</span>.generate(docs)
            </code>
          </pre>
        </motion.div>

        {/* Layer 2: Repository Node Card (Middle Translucent Layer) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="glass-card p-4 rounded-3xl border border-slate-900/10 dark:border-white/15 shadow-xl bg-white/75 dark:bg-[#0F172A]/90 backdrop-blur-xl relative z-10 -mt-6 sm:-mt-8 ml-6 sm:ml-10"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                <FaGitAlt className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-heading font-bold text-slate-900 dark:text-white">
                  GitSense AI
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  main • commit #8f92a1
                </p>
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-500 text-[10px] font-mono font-bold">
              +142 Vector Embeddings
            </div>
          </div>
        </motion.div>

        {/* Floating Technology Badges */}

        {/* Chip 1: Python */}
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-2 -left-4 sm:-left-6 px-3 py-1.5 rounded-2xl bg-slate-900/90 dark:bg-slate-800/90 border border-slate-700/80 shadow-lg text-white text-xs font-mono font-medium flex items-center gap-2 backdrop-blur-md z-30"
        >
          <FaPython className="text-amber-400 text-sm" />
          <span>Python</span>
        </motion.div>

        {/* Chip 2: Google Gemini */}
        <motion.div
          animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute top-1/3 -right-4 sm:-right-8 px-3.5 py-1.5 rounded-2xl bg-slate-900/90 dark:bg-slate-800/90 border border-cyan-500/30 shadow-[0_0_30px_-5px_rgba(6,182,212,0.35)] text-white text-xs font-mono font-medium flex items-center gap-2 backdrop-blur-md z-30"
        >
          <SiGoogle className="text-cyan-400 text-sm" />
          <span>Gemini AI</span>
        </motion.div>

        {/* Chip 3: React */}
        <motion.div
          animate={{ y: [0, -8, 0], x: [0, -4, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          className="absolute bottom-16 -left-3 sm:-left-6 px-3 py-1.5 rounded-2xl bg-slate-900/90 dark:bg-slate-800/90 border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(37,99,235,0.35)] text-white text-xs font-mono font-medium flex items-center gap-2 backdrop-blur-md z-30"
        >
          <FaReact className="text-blue-400 text-sm animate-spin-slow" />
          <span>React</span>
        </motion.div>

        {/* Chip 4: FastAPI */}
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-2 right-6 sm:right-12 px-3 py-1.5 rounded-2xl bg-slate-900/90 dark:bg-slate-800/90 border border-emerald-500/30 shadow-lg text-white text-xs font-mono font-medium flex items-center gap-2 backdrop-blur-md z-30"
        >
          <SiFastapi className="text-emerald-400 text-sm" />
          <span>FastAPI</span>
        </motion.div>

        {/* Chip 5: LangChain */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute top-2 right-12 px-2.5 py-1 rounded-xl bg-slate-900/80 border border-purple-500/30 text-purple-300 text-[11px] font-mono flex items-center gap-1.5 shadow-md z-30"
        >
          <SiLangchain className="text-purple-400 text-xs" />
          <span>LangChain</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero3DComposition;
