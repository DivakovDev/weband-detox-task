import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import "./about.css";

export default function AboutProduct() {
  const [activeTab, setActiveTab] = useState(0);
  // Create a new animation controller for the sections
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabContent = [
    {
      title: "Прочиства и Ефектен",
      content: (
        <>
          <p>
            Помага на организма да се освободи от натрупаните токсини, Спомага
            за усвояването на полезните вещества, Засилва имунната система и
            защитава от алергии, Ефикасен и здравословен метод за възвръщане на
            хармонията в тялото
          </p>
          <p>
            Изгаря мазнините дори в най-трудните за отслабване зони. Подобрява
            храносмилането и нормализира метаболизма. Премахва паласките,
            коремните мазнини и целулита. Без нужда от диети и тежки
            натоварвания. Подобрява фигурата без йо-йо ефект
          </p>
        </>
      ),
    },
    {
      title: "Натурален",
      content: (
        <>
          <p>
            Продуктът е изцяло натурален, без добавени химикали и изкуствени
            съставки. Съдържа само най-добрите природни съставки, които
            подпомагат здравословния начин на живот. Всяка съставка е внимателно
            подбрана, за да осигури максимална ефективност и безопасност.
          </p>
          <p>
            Натуралните съставки в продукта спомагат за подобряване на общото
            здравословно състояние, като същевременно предоставят необходимите
            витамини и минерали. Продуктът е подходящ за хора от всички възрасти
            и не предизвиква нежелани странични ефекти.
          </p>
        </>
      ),
    },
    {
      title: "Потвърден от нашите клиенти",
      content: (
        <>
          <p>
            Нашите клиенти споделят положителни отзиви и резултати след
            използването на продукта. Много от тях отбелязват значително
            подобрение в здравословното си състояние и общото благополучие.
          </p>
          <p>
            Вижте как продуктът е помогнал на много хора да постигнат своите
            здравословни цели. Клиентите ни споделят истории за успешни
            трансформации и подобрения в качеството на живот. Продуктът е
            доказан и надежден избор за всеки, който иска да подобри здравето
            си.
          </p>
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
    <div className="about-section" ref={sectionRef}>
      <div className="image-section">
        {/* here we use motion for adding animation */}
        <motion.img
          src="../public/images/about-product-bag.png"
          alt="about product image"
          // this fields below are for animation
          initial={{ x: -200 }}
          animate={controls}
        />
      </div>
      <div className="content-section">
        <h2 className="content-title">
          За Продукта{" "}
          <img src="../public/icons/about-task-bowl.svg" alt="image of bowl" />
          <img
            src="../public/icons/about-task-body-clock.svg"
            alt="image of body and clock"
          />
          <img src="../public/icons/about-task-detox.svg" alt="image of bowl" />
        </h2>
        <div className="tabs">
          {tabContent.map((tab, index) => (
            <button
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="content">{tabContent[activeTab].content}</div>
      </div>
    </div>
  );
}
