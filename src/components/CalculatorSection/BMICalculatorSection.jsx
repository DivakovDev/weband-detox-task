import "./calc.css";

const BMICalculatorSection = () => {
  return (
    <div className="calculcator-section">
      <div className="calc-container">
        <h3 className="calc-title">
          Разбери своят <span>индекс на телесна маса (BMI)</span>
        </h3>
        <p className="calc-paragraph">
          BMI (ИТМ) се изчислява спрямо вашите пол, години, ръст и тегло. Това
          показва дали според вашите физически показатели имате Поднормено,
          Нормално, Наднормено тегло или сте със Затлъстяване.
        </p>
        <button className="calc-btn">ОТВОРИ КАЛКУЛАТОРА</button>
      </div>
      <img
        className="bmi-man-img"
        src="../public/images/bmi-calculator-man.png"
        alt="Image of man for bmi calculator section"
      />
    </div>
  );
};

export default BMICalculatorSection;
