import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';

interface Props {}

const LandingPage: React.FC<Props> = () => {
  return (
    <div className="flex-container">
      <Card />
      <Banner />
    </div>
  );
};

export default LandingPage;
