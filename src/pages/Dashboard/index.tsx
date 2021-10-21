import React, { Fragment, useEffect } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import HomeSection from '../../sections/HomeSection';
import ParentsSection from '../../sections/ParentsSection';
import PuppiesSection from '../../sections/PuppiesSection';

const Dashboard: React.FC = () => {
  useEffect(() => {
    console.log(' ');
    console.log(' ');
    console.log('Made with ❤️ by Guilherme Bafica.');
    console.log(' ');
    console.log(' ');
  }, []);

  return (
    <Fragment>
      <Header />

      <HomeSection />
      <ParentsSection />
      <PuppiesSection />

      <Footer />
    </Fragment>
  )
}

export default Dashboard;
