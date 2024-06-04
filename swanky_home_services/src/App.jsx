import styles from './style';

import { Navbar, About, Contact, Footer, Hero, Reviews, Services } from './components';

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.bgB} ${styles.navbarFixed}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.bgGradient}`}>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} ${styles.bgGradient}`}>
        <div className={`${styles.boxWidth}`}>
        <Services />
        <About />
        <div className="py-20">
        <Reviews />
        </div>
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
