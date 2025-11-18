import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24"
    >
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          {/* =========== TOOLTIP TEXT =========== */}
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm"
            role="tooltip"
          >
            Hello! 👋 How are you doing? 🤔
          </span>
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border rounded-md border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Projets
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center text-zinc-100">
            <motion.svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              initial="hidden"
              animate="visible"
            >
              {/* Monitor */}
              <motion.g
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
              >
                {/* Monitor base */}
                <rect
                  x="100"
                  y="200"
                  width="200"
                  height="15"
                  rx="5"
                  fill="currentColor"
                  className="text-white dark:text-zinc-700"
                />
                {/* Monitor stand */}
                <rect
                  x="180"
                  y="215"
                  width="40"
                  height="20"
                  rx="3"
                  fill="currentColor"
                  className="text-white dark:text-zinc-700"
                />
                {/* Monitor screen */}
                <rect
                  x="110"
                  y="50"
                  width="180"
                  height="150"
                  rx="8"
                  fill="currentColor"
                  className="text-white dark:text-zinc-800"
                  stroke="#991b1b"
                  strokeWidth="2"
                />
                {/* Screen content area */}
                <rect
                  x="120"
                  y="60"
                  width="160"
                  height="130"
                  rx="4"
                  fill="currentColor"
                  className="text-zinc-50 dark:text-zinc-950"
                />
              </motion.g>

              {/* Code lines appearing on monitor */}
              {[
                { y: 75, delay: 0.8, width: 140 },
                { y: 95, delay: 1.0, width: 120 },
                { y: 115, delay: 1.2, width: 100 },
                { y: 135, delay: 1.4, width: 130 },
                { y: 155, delay: 1.6, width: 110 },
                { y: 175, delay: 1.8, width: 90 },
              ].map((line, i) => (
                <motion.rect
                  key={i}
                  x="130"
                  y={line.y}
                  width={line.width}
                  height="8"
                  rx="2"
                  fill="currentColor"
                  className="text-red-800 dark:text-red-500"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  transition={{
                    delay: line.delay,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  transformOrigin="left"
                />
              ))}

              {/* Cursor blinking */}
              <motion.rect
                x="240"
                y="175"
                width="3"
                height="12"
                fill="currentColor"
                className="text-red-800 dark:text-red-500"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  delay: 2,
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />

              {/* Woman character */}
              <motion.g
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, delay: 0.3 },
                  },
                }}
              >
                {/* Long flowing hair - back layer */}
                <path
                  d="M 175 95 Q 195 80 200 85 Q 205 80 225 95 Q 230 100 228 110 Q 225 120 220 130 Q 215 140 210 150 L 200 155 L 190 150 Q 185 140 180 130 Q 175 120 172 110 Q 170 100 175 95 Z"
                  fill="currentColor"
                  className="text-zinc-800 dark:text-zinc-700"
                />
                {/* Head */}
                <circle
                  cx="200"
                  cy="120"
                  r="25"
                  fill="currentColor"
                  className="text-white dark:text-zinc-200"
                />
                {/* Long hair - front layer with more detail */}
                <path
                  d="M 175 95 Q 190 85 200 90 Q 210 85 225 95 Q 228 100 226 108 Q 224 115 220 120 Q 218 125 215 130 L 200 135 L 185 130 Q 182 125 180 120 Q 176 115 174 108 Q 172 100 175 95 Z"
                  fill="currentColor"
                  className="text-zinc-700 dark:text-zinc-600"
                />
                {/* Hair side strands */}
                <path
                  d="M 175 100 Q 170 105 172 115 L 175 125"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="text-zinc-700 dark:text-zinc-600"
                />
                <path
                  d="M 225 100 Q 230 105 228 115 L 225 125"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="text-zinc-700 dark:text-zinc-600"
                />
                {/* Body - more feminine shape with slight waist */}
                <rect
                  x="188"
                  y="145"
                  width="24"
                  height="35"
                  rx="8"
                  fill="currentColor"
                  className="text-red-800 dark:text-red-500"
                />
                {/* Arms - typing motion */}
                <motion.g
                  animate={{
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  transformOrigin="200 160"
                >
                  {/* Left arm */}
                  <rect
                    x="175"
                    y="150"
                    width="10"
                    height="25"
                    rx="5"
                    fill="currentColor"
                    className="text-white dark:text-zinc-200"
                  />
                  {/* Right arm */}
                  <rect
                    x="215"
                    y="150"
                    width="10"
                    height="25"
                    rx="5"
                    fill="currentColor"
                    className="text-white dark:text-zinc-200"
                  />
                </motion.g>
                {/* Hands on keyboard */}
                <motion.circle
                  cx="180"
                  cy="175"
                  r="5"
                  fill="currentColor"
                  className="text-white dark:text-zinc-200"
                  animate={{
                    cy: [175, 173, 175],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: 0.1,
                  }}
                />
                <motion.circle
                  cx="220"
                  cy="175"
                  r="5"
                  fill="currentColor"
                  className="text-white dark:text-zinc-200"
                  animate={{
                    cy: [175, 173, 175],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                />
              </motion.g>

              {/* Keyboard */}
              <motion.g
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.5 },
                  },
                }}
              >
                <rect
                  x="150"
                  y="190"
                  width="100"
                  height="20"
                  rx="4"
                  fill="currentColor"
                  className="text-white dark:text-zinc-700"
                  stroke="#991b1b"
                  strokeWidth="1"
                />
                {/* Keyboard keys */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <motion.rect
                    key={i}
                    x={155 + i * 11}
                    y="193"
                    width="8"
                    height="14"
                    rx="1"
                    fill="currentColor"
                    className="text-red-800 dark:text-red-500"
                    animate={{
                      y: [193, 195, 193],
                    }}
                    transition={{
                      duration: 0.2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.g>

              {/* Floating code elements/icons around monitor */}
              {[
                { x: 80, y: 80, icon: "< />", delay: 2 },
                { x: 320, y: 100, icon: "{ }", delay: 2.3 },
                { x: 90, y: 150, icon: "CSS", delay: 2.6 },
                { x: 310, y: 160, icon: "JS", delay: 2.9 },
              ].map((item, i) => (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1, 0],
                    y: [item.y, item.y - 20, item.y - 20, item.y],
                  }}
                  transition={{
                    delay: item.delay,
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <text
                    x={item.x}
                    y={item.y}
                    fontSize="14"
                    fill="currentColor"
                    className="text-red-800 dark:text-red-500 font-mono"
                    fontWeight="bold"
                  >
                    {item.icon}
                  </text>
                </motion.g>
              ))}
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
