import Carousel from "./Component/Carousel";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Plans from "./Component/Plans";

function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <Plans text='PLANS'/>
    <Footer texts='VISIT US IN KENYA'/>
    </>
  );
}

export default App;
