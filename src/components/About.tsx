import styles from './../styles/components/about.module.scss';

export const About = () => {
  return (
    <ul className={styles.about}>
      <li>Shuji Nishino</li>
      <li>Frontend Developper</li>
      <li>1989/06/09</li>
      <li>
        <details>
          <summary>Skills</summary>
          <div>
            <p>HTML, CSS, ECMAScript, TypeScript, Node.js, AWS, etc...</p>
            <ul>
              <li>
                2011 経済産業省基本情報技術者試験合格
              </li>
              <li>
                2020 AWS Certified Developer - Associate (DVA-C01)
              </li>
            </ul>
          </div>
        </details>
        </li>
    </ul>
  )
}