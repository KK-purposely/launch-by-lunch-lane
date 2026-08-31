import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Users, Calendar, ShieldCheck } from "lucide-react";

const WARM = "linear-gradient(96deg, #ec4795 0%, #fc8817 100%)";
const PURPLE = "linear-gradient(135deg, #6b3a82 0%, #ec4795 100%)";
const ORB =
  "radial-gradient(circle at 35% 30%, #ffd7c4 0%, #f6a0c4 30%, #ec4795 55%, #6b3a82 100%)";

export const BrainOrb = () => {
  const nodes = [
    { label: "Gmail", type: "logo", src: "/logos/gmail.svg" },
    { label: "Team", type: "icon", icon: Users, bg: PURPLE },
    { label: "Docs", type: "icon", icon: FileText, bg: "linear-gradient(135deg,#ec4795,#b21f63)" },
    { label: "Drive", type: "logo", src: "/logos/google-drive.svg" },
    { label: "Info", type: "icon", icon: MessageSquare, bg: WARM },
    { label: "Brand", type: "icon", icon: ShieldCheck, bg: "linear-gradient(135deg,#fc8817,#b75a06)" },
    { label: "Slack", type: "logo", src: "/logos/slack.svg" },
    { label: "Cadence", type: "icon", icon: Calendar, bg: "linear-gradient(135deg,#ffa84a,#fc8817)" },
  ];
  const R = 44; // % radius for placement
  return (
    <motion.div
      className="relative w-full aspect-square max-w-[560px] mx-auto"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95], repeatType: "loop" }}
    >
      {/* Rotating dashed ring */}
      <motion.div
        className="absolute inset-[8%] rounded-full"
        style={{
          border: "1.5px dashed rgba(255,255,255,0.28)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* SVG flowing connector lines */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {nodes.map((_, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * R;
          const y = 50 + Math.sin(angle) * R;
          return (
            <line
              key={i}
              x1={x}
              y1={y}
              x2="50"
              y2="50"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.3"
              strokeDasharray="1.2 1.2"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-12"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>
          );
        })}
      </svg>

      {/* Central orb with brain */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
        style={{
          width: "38%",
          height: "38%",
          background: ORB,
          boxShadow:
            "0 0 60px rgba(236,71,149,0.55), 0 0 120px rgba(252,136,23,0.25)",
        }}
        animate={{
          boxShadow: [
            "0 0 60px rgba(236,71,149,0.45), 0 0 120px rgba(252,136,23,0.2)",
            "0 0 90px rgba(236,71,149,0.7), 0 0 160px rgba(252,136,23,0.35)",
            "0 0 60px rgba(236,71,149,0.45), 0 0 120px rgba(252,136,23,0.2)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center text-white">
          <svg viewBox="0 0 64 58" fill="none" className="w-20 h-20 md:w-24 md:h-24" style={{ filter: "drop-shadow(0 2px 6px rgba(20,8,30,0.35))" }} aria-hidden="true">
            <path d="M32 6C24 3 14 6 11 15C6 17 5 24 9 29C6 34 9 42 16 43C18 50 27 53 32 49C37 53 46 50 48 43C55 42 58 34 55 29C59 24 58 17 53 15C50 6 40 3 32 6Z" fill="rgba(255,255,255,0.16)" stroke="#fff" strokeWidth="2.4" strokeLinejoin="round" />
            <path d="M32 7V50" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <g stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M32 15C27 15 25 19 28 22" /><path d="M22 13C19 16 20 20 23 21" /><path d="M14 20C11 23 13 28 17 28" /><path d="M20 30C16 31 16 37 21 38" /><path d="M32 28C28 28 26 32 29 35" /><path d="M32 40C28 40 27 44 30 46" />
              <path d="M32 15C37 15 39 19 36 22" /><path d="M42 13C45 16 44 20 41 21" /><path d="M50 20C53 23 51 28 47 28" /><path d="M44 30C48 31 48 37 43 38" /><path d="M32 28C36 28 38 32 35 35" /><path d="M32 40C36 40 37 44 34 46" />
            </g>
          </svg>
          <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mt-1">
            Company<br />Brain
          </div>
        </div>
      </motion.div>

      {/* Node badges */}
      {nodes.map((n, i) => {
        const angle = (i / nodes.length) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * R;
        const y = 50 + Math.sin(rad) * R;
        const Icon = (n as any).icon;
        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center shadow-lg"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: "12%",
              height: "12%",
              boxShadow: "0 10px 30px -6px rgba(20,10,40,0.35)",
            }}
          >
            {n.type === "logo" ? (
              <img src={(n as any).src} alt={n.label} className="w-1/2 h-1/2 object-contain" />
            ) : (
              <span
                className="w-3/4 h-3/4 rounded-full flex items-center justify-center text-white"
                style={{ background: (n as any).bg }}
              >
                <Icon className="w-1/2 h-1/2" />
              </span>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};
