import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};

export default Routes;
