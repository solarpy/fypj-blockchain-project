import React from 'react';
import "../Home.css"
import styles from '../style';
import { Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from '../components1';

const Home = () => {
  return (
    <>
    <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
      </div>
    </div>
    </>
  )
}

export default Home