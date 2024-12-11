import Navbar from "./components/Navigation/Navbar";
import Hero from "./components/Hero/Hero";
import AboutProduct from "./components/AboutProduct/AboutProduct";
import WhyToConsume from "./components/WhyToConsum/WhyToConsume";
import BMICalculatorSection from "./components/CalculatorSection/BMICalculatorSection";
import CTASection from "./components/CTAsection/CTASection";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutProduct/>
      <WhyToConsume/>
      <BMICalculatorSection/>
      <CTASection/>
    </>
  );
}

export default App;
