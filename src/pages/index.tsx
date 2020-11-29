import { HtmlHead, Icons, Footer, About } from './../components';
import styles from './../styles/home.module.scss';
import layoutStyles from './../styles/layout.module.scss';

export default function Home() {
  return (
    <div className={`${styles.container} ${layoutStyles.container}`}>
      <HtmlHead />

      <header className={layoutStyles.name}>
        <h1>Surumebeer</h1>
      </header>
      <div className={layoutStyles.icons}>
        <Icons/>
      </div>
      <div className={layoutStyles.about}>
        <About />
      </div>
      <footer className={layoutStyles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
