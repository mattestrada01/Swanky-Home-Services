import styles from './style';

import { Navbar, About, Contact, Footer, Hero, Reviews, Services } from './components';

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.bgB} ${styles.navbarFixed}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.bgGradient} pt-20 sm:pt-10`}>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero id="home" />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} ${styles.bgGradient}`}>
        <div className={`${styles.boxWidth}`}>
          <Services id="services" />
          <About id="about" />
          <Reviews id="reviews" />
          <Contact id="contact" />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} ${styles.bgB}`}> 
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
