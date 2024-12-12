import "./hero.css";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="hero-section">
      {/* Here we add motion for creating animation */}
      <motion.img
        className="blr-left-bag"
        src="../public/images/blured-bag-left-hero.png"
        alt="blured bag for left bottom corner of hero section"
        // this fields below are for animation
        initial={{ x: -100 }}
        animate={{
          x: 0,
          transition: { duration: 2 },
        }}
      />
      <img
        className="hero-image"
        src="../public/images/girl-hero-section.png"
        alt="girl with tee and jeans in hero section"
      />
      <div className="hero-desc">
        <img
          className="hero-title"
          src="../public/detox-hero.svg"
          alt="Detox svg for hero section"
        />
        <h3 className="hero-desc-p">
          Health and effective {"  "}
          <span className="hero-desc-p-bold">slimming</span>
        </h3>
      </div>
      {/* Here we add motion for creating animation */}
      <motion.div
        className="scroll-down-container"
        // this fields below are for animation
        initial={{ y: 100 }}
        animate={{
          y: 0,
          transition: { duration: 2 },
        }}
      >
        <img
          src="../public/images/scroll-down-arrows.svg"
          alt="scroll down images"
        />
        <p className="scroll-text">learn more</p>
        <img
          className="scroll-bag"
          src="../public/images/scroll-down-bag.png"
          alt="scroll down bag image"
        />
      </motion.div>
      {/* Here we add motion for creating animation */}
      <motion.img
        className="blr-right-bag"
        src="../public/images/blured-bag-right-hero.png"
        alt="blured bag for bottom right corner of hero section"
        // this fields below are for animation
        initial={{ x: 100 }}
        animate={{
          x: 0,
          transition: { duration: 2 },
        }}
      />
    </div>
  );
}
