import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Welcome</h1>
      <Link href={'/games'}>
        <span>select game</span>
      </Link>
    </div>
  )
}
