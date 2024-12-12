import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import "./why.css";

const WhyToConsume = () => {
  const [selectedCard, setSelectedCard] = useState(0); // Track the selected card
  // Create a new animation controller for the section
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const selectBox = (index) => {
    setSelectedCard(index);
  };

  const cards = [
    {
      imgSrc: "../public/icons/why-to-consume-leaf.svg",
      altText: "why to consume leaf icon",
      desc: (
        <>
          СЪДЪРЖА <span>100%</span> <br />
          ЧИСТИ БИЛКИ
        </>
      ),
    },
    {
      imgSrc: "../public/icons/why-to-consume-muscle.svg",
      altText: "why to consume muscle icon",
      desc: (
        <>
          <span>ЗАСИЛВА</span> И <span>УКРЕПВА</span>
          <br /> ИМУННАТА СИСТЕМА
        </>
      ),
    },
    {
      imgSrc: "../public/icons/why-to-consume-vitamins.svg",
      altText: "why to consume vitamins icon",
      desc: (
        <>
          БОГАТ НА ВАЖНИ
          <br />
          <span>ВИТАМИНИ</span> И <span>МИНЕРАЛИ</span>
        </>
      ),
    },
    {
      imgSrc: "../public/icons/why-to-consume-skin-treatment.svg",
      altText: "why to consume vitamins icon",
      desc: (
        <>
          <span>ХИДРАТИРА</span> И <span>ИЗГЛАЖДА</span>
          <br />
          КОЖАТА
        </>
      ),
    },
  ];

  // Here we are using useEffect to make IntersectionObserver to trigger the animation when the section is in view
  useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start({ y: 0, transition: { duration: 1 } });
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
    <div className="why-section" ref={sectionRef}>
      <motion.h2 className="why-title"
      initial={{ y: -50 }}
      animate={controls}
      >
        Причини да консумираш <span className="why-title-bold">Detox</span>
      </motion.h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${selectedCard === index ? "selected" : ""}`}
            onClick={() => selectBox(index)}
          >
            <img src={card.imgSrc} alt={card.altText} />
            <p className="card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyToConsume;
