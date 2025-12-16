import React from 'react';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
// import CategoryIcons from '../components/CategoryIcons';
// import FlashSale from '../components/FlashSale';
// import CarWashing from '../components/CarWashing';
// import FeaturedBrands from '../components/FeaturedBrands';
// import ProductList from '../components/ProductList';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <CategoryIcons />
      <FlashSale />
      <CarWashing />
      <FeaturedBrands /> */}
      <BestSellers />
    </>
  );
};

export default HomePage;