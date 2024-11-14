// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/common/NavBar';
import CarList from '../src/pages/buyer/CarList';
import CarDetails from '../src/pages/buyer/CarDetails';
import About from './components/common/About';
import Cart from '../src/pages/buyer/Cart';
import Footer from './components/common/Footer';
import LandingPage from '../src/components/common/LandingPage';
import Login from '../src/pages/auth/Login'; // Import Login
import Signup from '../src/pages/auth/Signup'; // Import Signup
import CarBrands from '../src/pages/buyer/CarBrands'; // Import CarBrands
import BenzPage from '../src/pages/buyer/BenzPage';
import { mercedesModels } from '../src/data/mercedesModels';
import { toyotaModels } from '../src/data/toyotaModels';
import ToyotaPage from '../src/pages/buyer/ToyotaPage'; // Import ToyotaPage
import SellerHome from './pages/seller/SellerHome';
import SellCarForm from './pages/seller/SellcarForm';
import CarListings from './pages/buyer/CarListings';


// Function to generate cars
const generateCars = (num) => {
    const carNames = [
        'Tesla Model S',
        'Ford Mustang',
        'Chevrolet Camaro',
        'Honda Accord',
        'Toyota Camry',
        'BMW 3 Series',
        'Audi A4',
        'Mercedes-Benz C-Class',
        'Nissan Altima',
        'Kia Optima',
        'Volkswagen Passat',
        'Subaru Legacy',
        'Hyundai Sonata',
        'Mazda6',
        'Lexus ES',
        'Toyota Corolla',
        'Honda Civic',
        'Ford F-150',
        'Chevrolet Silverado',
        'Ram 1500',
        'GMC Sierra',
        'Dodge Ram',
        'Jeep Wrangler',
        'Toyota RAV4',
        'Honda CR-V',
        'Nissan Rogue',
        'Ford Escape',
        'Hyundai Tucson',
        'Kia Sportage',
        'Subaru Forester',
        'Mazda CX-5',
        'Volkswagen Tiguan',
        'Porsche 911',
        'Chevrolet Corvette',
        'Ford GT',
        'Lamborghini Aventador',
        'Ferrari 488',
        'McLaren 720S',
        'Audi R8',
        'Nissan GT-R',
        'Dodge Challenger',
        'Mazda MX-5 Miata',
        'Jaguar F-Type',
        'Land Rover Range Rover',
        'Tesla Model X',
        'BMW X5',
        'Mercedes-Benz GLE',
        'Audi Q5',
        'Lexus RX',
        'Volvo XC60',
        'Buick Enclave',
        'Chrysler Pacifica',
        'Toyota Highlander',
        'Ford Explorer',
        'Chevrolet Equinox',
        'Hyundai Santa Fe',
        'Kia Sorento',
        'Nissan Murano',
        'Subaru Ascent',
        'Honda HR-V',
        'Toyota 4Runner',
        'Jeep Grand Cherokee',
        'Dodge Durango',
        'Volkswagen Atlas',
        'Mazda CX-9',
        'Hyundai Palisade',
        'Genesis G80',
        'Infiniti Q50',
        'Acura TLX',
        'Toyota Avalon',
        'Chrysler 300',
        'Dodge Charger',
        'Nissan Maxima',
        'Ford Fusion',
        'Volkswagen Jetta',
        'Honda Insight',
        'Chevrolet Malibu',
        'Toyota Prius',
        'Hyundai Ioniq',
        'Kia Niro',
        'Ford Mustang Mach-E',
        'Tesla Model Y',
        'Rivian R1T',
        'Lucid Air',
        'Polestar 2',
        'Volvo V60',
        'Porsche Cayenne',
        'Toyota Tacoma',
        'Nissan Frontier',
        'Chevrolet Colorado',
        'Ford Ranger',
        'Hyundai Santa Cruz',
        'Mitsubishi Outlander',
        'Subaru Crosstrek',
        'Honda Passport',
        'Chrysler Voyager',
        'Dodge Journey',
        'Fiat 500',
        'Mini Cooper',
        'Smart Fortwo',
        'Toyota Sienna',
        'Nissan NV3500',
        'Chevrolet Express',
        'Ford Transit',
        'Mercedes-Benz Sprinter',
        'Ram ProMaster',
        'Honda Ridgeline',
        'Toyota Land Cruiser',
        'Lexus GX',
        'Nissan Armada',
        'Ford Bronco',
        'Jeep Compass',
        'Land Rover Defender',
        'Mitsubishi Eclipse Cross',
        'Kia Telluride',
        'BMW Z4',
        'Toyota Supra',
        'Acura RDX',
        'Infiniti QX60',
        'Mazda3',
        'Subaru WRX',
        'Honda Fit',
        'Hyundai Veloster',
        'Nissan 370Z',
        'Ford Fiesta',
        'Chevrolet Spark',
        'Toyota Yaris',
        'Kia Rio',
        'Volkswagen Golf',
        'Audi A3',
        'Jaguar E-PACE',
        'Volvo S60',
        'Genesis GV80',
        'Acura MDX',
        'Mazda CX-30',
        'Buick Encore',
        'Chevrolet Trax',
        'Hyundai Kona',
        'Kia Soul',
        'Nissan Kicks',
        'Fiat 124 Spider',
        'Dodge Challenger R/T',
        'Porsche Macan',
        'Tesla Roadster',
        'Maserati Ghibli',
        'Alfa Romeo Giulia',
        'Volkswagen Beetle',
        'Land Rover Discovery',
        'Lincoln Navigator',
        'Cadillac Escalade',
        'Chrysler 200',
        'Toyota Mirai',
        'Nissan Leaf',
        'Hyundai Kona Electric',
        'Kia EV6',
        'BMW i4',
        'Ford Mustang Mach-E',
        'Audi e-tron',
        'Porsche Taycan',
        'Mercedes-Benz EQC',
        'Jaguar I-PACE',
        'Lucid Air',
        'Polestar 2',
    ];
    

  const cars = [];

  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * carNames.length);
    const carName = carNames[randomIndex];
    const car = {
      id: i + 1, // Unique ID
      name: carName,
      price: Math.floor(Math.random() * (100000 - 20000 + 1)) + 20000, // Random price between 20,000 and 100,000
      image: `/images/${carName.replace(/\s+/g, '-').toLowerCase()}.jpg`, // Image path based on car name
      description: `${carName} is a great choice for anyone looking for a reliable vehicle.`, // Generic description
    };
    cars.push(car);
  }

  return cars;
};


const App = () => {
  const [cart, setCart] = useState([]);
  const [hasViewedCart, setHasViewedCart] = useState(false);

  const addToCart = (car) => {
    setCart((prevCart) => [...prevCart, car]);
  };

  const handleCartClick = () => {
    setHasViewedCart(true);
  };

  const cars = generateCars(500);

  return (
    <Router>
      <Navbar cart={cart} hasViewedCart={hasViewedCart} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarList cars={cars} />} />
        <Route
          path="/cars/:id"
          element={<CarDetails cars={mercedesModels} addToCart={addToCart} />}
        />
         <Route
          path="/cars/toyota/:id"
          element={<CarDetails cars={toyotaModels} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/benzpage" element={<BenzPage />} />
        <Route path="/toyotapage" element={<ToyotaPage />} /> {/* Add this route for ToyotaPage */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/car-brands" element={<CarBrands />} />
        <Route path="/seller-home" element={<SellerHome />} />
        <Route path="/sell-car" element={<SellCarForm />} />
        <Route path="/car-listings" element={<CarListings />} />
      </Routes>
      <Footer />
    </Router>
  );
};



export default App;
