import Link from 'next/link'
import styles from './breadCrumb.module.css'

export default function BreadCrumb() {
  return (
    <nav className={styles.nav}>
      <Link href={'#'}>
        <a>Loryen</a>
      </Link>
      <Link href={'#'}>
        <a>İstanbul</a>
      </Link>
      <Link href={'#'}>
        <a>Loryen BreadCrumb</a>
      </Link>
    </nav>
  )
}
