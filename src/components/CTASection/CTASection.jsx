import "./cta.css";

const CTASection = () => {
  return (
    <div className="cta-card">
      <div className="left-part">
        <img className="left-img" src="../public/images/herba-detox.svg" alt="Detox Pack" />
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
          <img className="cta-title-img" src="../public/images/cta-detox.svg" alt="cta detox title image" />
          <p>Pack for 1 month <span>/ 170 gr.</span></p>
          <div>
            <span className="price">109.00 лв.</span>
            <span className="old-price">119.60 лв.</span>
          </div>
        </div>
      </div>
      <div className='right-part'>
        <h2>Изпробвай <span>Detox</span></h2>
        <p>Detox подпомага нормалното протичане на метаболизма и обмяната на веществата, стимулира работата на храносмилателната и отделителната система.</p>
        <button className="buy-button">Купи сега</button>
      </div>
    </div>
  );
};

export default CTASection;
