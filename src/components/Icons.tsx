import styles from './../styles/components/icons.module.scss';

export const Icons = () => {
  return (
    <div className={styles.icons}>
      <ul>
        <li>
          <a href="https://twitter.com/surumebeer" target="_blank" rel="noreferrer noopener">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://zenn.dev/surumebeer" target="_blank" rel="noreferrer noopener">
            Zenn
          </a>
        </li>
        <li>
        <a href="https://surumebeer.hatenablog.jp/" target="_blank" rel="noreferrer noopener">
            blog
          </a>
        </li>
        <li>
          <a href="https://github.com/surumebeer" target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}