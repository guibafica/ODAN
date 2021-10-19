import React, { Fragment, useEffect } from "react";

import Footer from '../../components/Footer';

import HomeSection from '../../sections/HomeSection';

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
      <HomeSection />

      <Footer />
    </Fragment>
  )
}

export default Dashboard;
