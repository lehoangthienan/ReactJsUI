import React, { Component } from 'react';
import Routes from '../components/Routes';
import SideNavigation from '../components/SideNavigation';
import Footer from '../components/Footer';
import TopNavigation from '../components/TopNavigation';
import MenuAppBar from '../components/MenuAppBar';
import '../index.css';
import TermPolicy from '../components/TermPolicy';

class CRUDProduct extends Component {
  
  render() {
    return (
      <div className="flexible-content">
          <MenuAppBar />
          <SideNavigation />
          <main id="content" className="p-5">
            <Routes />
          </main>
          <TermPolicy/>
          <Footer />
        </div>
    );
  }
}

export default CRUDProduct;
