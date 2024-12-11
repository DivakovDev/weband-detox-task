import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <p>
          * Резултатите от приема на Detox чай са индивидуални за различните
          потребители и зависят от техните физически показатели и навици!
        </p>
        <ul className="navigation">
          <li>
            <a href="#">Начало</a>
          </li>
          <li>
            <a href="#">Поръчай</a>
          </li>
          <li>
            <a href="#">Въпроси</a>
          </li>
          <li>
            <a href="#">Доставка</a>
          </li>
          <li>
            <a href="#">Плащане</a>
          </li>
          <li>
            <a href="#">Лични данни</a>
          </li>
          <li>
            <a href="#">Общи условия</a>
          </li>
        </ul>
      </div>
      <div className="payment-options">
        <p className="payment-title">Начини на плащане</p>
        <ul className="payment-list">
          <li>
            <img src="../public/footer/mastercard.svg" alt="master card logo" />
          </li>
          <li>
            <img src="../public/footer/maestro.svg" alt="maestro logo" />
          </li>
          <li>
            <img src="../public/footer/visa.svg" alt="visa logo" />
          </li>
          <li>
            <img
              src="../public/footer/diners-club-pay-logo.svg"
              alt="diners club logo"
            />
          </li>
          <li>
            <img
              src="../public/footer/Verified-by-visa-logo.svg"
              alt="verified by visa logo"
            />
          </li>
          <li>
            <img
              src="../public/footer/MasterCard_SecureCode.svg"
              alt="master mard secure code logo"
            />
          </li>
          <li>
            <img src="../public/footer/paypal.svg" alt="paypal logo" />
          </li>
          <li>
            <img
              src="../public/footer/norton-by-symantec-vector-logo.svg"
              alt="norton by symantec vector logo"
            />
          </li>
        </ul>
      </div>
      <div className="shipment-options">
        <p className="shipment-title">Начини на доставка</p>
        <ul className="shiping-list">
          <li>
            <img src="../public/footer/DHL_Logo.svg" alt="dhl logo" />
          </li>
          <li>
            <img src="../public/footer/brt-it.svg" alt="brt-it logo" />
          </li>
          <li>
            <img src="../public/footer/speedy.svg" alt="speedy logo" />
          </li>
        </ul>
      </div>
      <div className="social-medias">
        <img src="../public/footer/facebook-logo.svg" alt="facebook logo" />
        <img src="../public/footer/instagram.svg" alt="insta logo" />
        <img src="../public/footer/google-plus.svg" alt="google logo" />
      </div>
      <p className="rights">Copyright © 2018. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
