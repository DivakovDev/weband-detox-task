import { useEffect, useRef } from "react";
import { motion, useAnimation } from "motion/react";
import "./cta.css";

const CTASection = () => {
// Create a new animation controller for the section
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
    <div className="cta-card" ref={sectionRef}>
      <div className="left-part">
        <motion.img
          className="left-img"
          src="../public/images/herba-detox.svg"
          alt="Detox Pack"
          initial={{ x: -100 }}
          animate={controls}
        />
        <div className="product-details">
          <div className="try-images">
            <img
              src="../public/icons/try-detox-14-days.svg"
              alt="try detox for 14 days icon"
            />
            <img
              src="../public/icons/try-detox-delivery.svg"
              alt="try detox for 14 days icon"
            />
            <img
              src="../public/icons/try-detox-payment.svg"
              alt="try detox for 14 days icon"
            />
          </div>
          <img
            className="cta-title-img"
            src="../public/images/cta-detox.svg"
            alt="cta detox title image"
          />
          <p>
            Pack for 1 month <span>/ 170 gr.</span>
          </p>
          <div>
            <span className="price">109.00 лв.</span>
            <span className="old-price">119.60 лв.</span>
          </div>
          <button className="buy-button btn1">Купи сега</button>
        </div>
      </div>
      <div className="right-part">
        <h2>
          Изпробвай <span>Detox</span>
        </h2>
        <p>
          Detox подпомага нормалното протичане на метаболизма и обмяната на
          веществата, стимулира работата на храносмилателната и отделителната
          система.
        </p>
        <button className="buy-button">Купи сега</button>
      </div>
    </div>
  );
};

export default CTASection;
