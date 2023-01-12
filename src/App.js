import logo from './logo.svg';
import './App.scss';
import './components/AboutUs/AboutUs'
import AboutUs from './components/AboutUs/AboutUs';
import "./fonts/Poppins-Bold.ttf";
import "./fonts/Poppins-Regular.ttf";
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Footer from './components/Footer/Footer';
import "./Icons/index"
import OurClients from './components/OurClients/OurClients';
import MapLocation from './components/Map/MapLocation';
import OurCP from './components/OurClients/OurCP';
import ContactUs from './components/ContactUs/ContactUs';
import Banner from './components/BannerHead/Banner';
import PriceTable from './components/Table/PriceTable';


function App() {
  return (
    <div className="App">
      <Banner />
      <AboutUs />
      <WhatWeDo />
      <OurCP />
      <PriceTable />
      <ContactUs />
      <MapLocation />
      <Footer />
    </div>
  );
}

export default App;
