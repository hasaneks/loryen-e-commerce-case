import styles from './header.module.css'
import { Container, Button, SearchInput, BasketButton } from '../index'

export default function Header() {
  return (
    <header>
      <Container className={styles.headerContainer}>
        <Button className={styles.logoWrapper} href={'#'}>
          <img src="/img/logo.png" alt="Loryen" />
        </Button>

        <div className={styles.searchWrapper}>
          <SearchInput />
        </div>

        <div className={styles.basketWrapper}>
          <BasketButton />
        </div>
      </Container>
    </header>
  )
}
