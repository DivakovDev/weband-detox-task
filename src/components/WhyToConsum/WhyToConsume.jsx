import { useState } from "react";
import "./why.css";

const WhyToConsume = () => {
  const [selectedCard, setSelectedCard] = useState(0); // Track the selected card

  const selectBox = (index) => {
    setSelectedCard(index);
  };

  const cards = [
    {
      imgSrc: "../public/icons/why-to-consume-leaf.svg",
      altText: "why to consume leaf icon",
      desc: (
        <>
          СЪДЪРЖА <span>100%</span> <br/>ЧИСТИ БИЛКИ
        </>
      ),
    },
    {
      imgSrc: "../public/icons/why-to-consume-muscle.svg",
      altText: "why to consume muscle icon",
      desc: (
        <>
          <span>ЗАСИЛВА</span> И <span>УКРЕПВА</span><br/> ИМУННАТА СИСТЕМА
        </>
      ),
    },
    {
      imgSrc: "../public/icons/why-to-consume-vitamins.svg",
      altText: "why to consume vitamins icon",
      desc: (
        <>
          БОГАТ НА ВАЖНИ<br/>
          <span>ВИТАМИНИ</span> И <span>МИНЕРАЛИ</span>
        </>
      ),
    },
    {
      imgSrc: "../public/icons/why-to-consume-skin-treatment.svg",
      altText: "why to consume vitamins icon",
      desc: <><span>ХИДРАТИРА</span> И <span>ИЗГЛАЖДА</span><br/>
          КОЖАТА</>,
    },
  ];

  return (
    <div className="why-section">
      <h2 className="why-title">
        Причини да консумираш <span className="why-title-bold">Detox</span>
      </h2>
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
