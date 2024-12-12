import { useEffect, useRef } from "react";
import { motion, useAnimation } from "motion/react";
import "./calc.css";

const BMICalculatorSection = () => {
// Create a new animation controller for the sections
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Here we are using useEffect to make IntersectionObserver to trigger the animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ x: 0, transition: { duration: 2 } });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <div className="calculcator-section" ref={sectionRef}>
      <motion.div className="calc-container"
      initial={{ x: -100 }}
      animate={controls}
      >
        <h3 className="calc-title">
          Разбери своят <span>индекс на телесна маса (BMI)</span>
        </h3>
        <p className="calc-paragraph">
          BMI (ИТМ) се изчислява спрямо вашите пол, години, ръст и тегло. Това
          показва дали според вашите физически показатели имате Поднормено,
          Нормално, Наднормено тегло или сте със Затлъстяване.
        </p>
        <button className="calc-btn">ОТВОРИ КАЛКУЛАТОРА</button>
      </motion.div>
      <motion.img
        className="bmi-man-img"
        src="../public/images/bmi-calculator-man.png"
        alt="Image of man for bmi calculator section"
        initial={{ x: 100 }}
        animate={controls}
      />
    </div>
  );
};

export default BMICalculatorSection;
