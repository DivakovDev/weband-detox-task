import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-section">
      <img
        className="blr-left-bag"
        src="../public/images/blured-bag-left-hero.png"
        alt="blured bag for left bottom corner of hero section"
      />
      <img
        className="hero-image"
        src="../public/images/girl-hero-section.png"
        alt=""
      />
      <div className="hero-desc">
        <h1 className="hero-title">
          <img
            src="../public/detox-hero.svg"
            alt="Detox svg for hero section"
          />
        </h1>
        <h3 className="hero-desc-p">
          Health and effective {"  "}
          <span className="hero-desc-p-bold">slimming</span>
        </h3>
      </div>
      <div className="scroll-down-container">
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
      </div>
      <img
        className="blr-right-bag"
        src="../public/images/blured-bag-right-hero.png"
        alt="blured bag for bottom right corner of hero section"
      />
    </div>
  );
}
