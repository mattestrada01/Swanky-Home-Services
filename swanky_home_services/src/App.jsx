import styles from './style';

import { Navbar, About, Contact, Footer, Hero, Reviews, Services } from './components';

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.bgB} ${styles.navbarFixed}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className="bg-[hsl(var(--background))] pt-20 sm:pt-10">
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero id="home" />
        </div>
      </div>

      <div className="w-full bg-[hsl(var(--background))]">
        <Services id="services" />
        <div className={`${styles.paddingX}`}>
          <div className={`${styles.boxWidth} mx-auto`}>
            <About id="about" />
            <Reviews id="reviews" />
            <Contact id="contact" />
          </div>
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
