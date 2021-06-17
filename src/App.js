import Carousel from "./Component/Carousel/Carousel";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Plans from "./Component/Plans/Plans";

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
