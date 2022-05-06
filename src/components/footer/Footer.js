import styles from './footer.module.css'
import * as Icons from '../icons'
import { Button, MobileAppBanner, Container } from '../index'
import {footerMenuData} from "../../constants/initialData";

export default function Footer() {

  return (
    <footer
      style={{
        backgroundColor: '#F2F2F2',
        paddingTop: '150px'
      }}
    >
      <Container>
        <MobileAppBanner />
        <div className={styles.contentContainer}>
          <div className={styles.infoWrapper}>
            <img src="/img/logo.png" alt="Loryen" />
            <div className={styles.socialMediaWrapper}>
              <Button href={'#'}>
                <Icons.Facebook />
              </Button>
              <Button href={'#'}>
                <Icons.Twitter />
              </Button>
              <Button href={'#'}>
                <Icons.Instagram />
              </Button>
              <Button href={'#'}>
                <Icons.Youtube />
              </Button>
              <Button href={'#'}>
                <Icons.Blog />
              </Button>
            </div>
            <p>
              Loryen.com olarak kişisel verilerinizin gizliliğini
              önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
              kapsamında oluşturduğumuz aydınlatma metnine{' '}
              <a href={'#'}>buradan</a> ulaşabilirsiniz.
            </p>
          </div>

          <div className={styles.menuContainer}>
            <div className={styles.menuItem}>
              <p className={styles.menuTitle}>Faydalı Bilgiler</p>
              <ul>
                {footerMenuData['usefulInformation']?.map((item) => (
                  <li key={item.title}>
                    <Button href={item.url}>{item.title}</Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.menuItem}>
              <p className={styles.menuTitle}>Kurumsal</p>
              <ul>
                {footerMenuData['institutional']?.map((item) => (
                  <li key={item.title}>
                    <Button href={item.url}>{item.title}</Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.menuItem}>
              <p className={styles.menuTitle}>İletişim</p>
              <ul>
                {footerMenuData['contact']?.map((item) => (
                  <li key={item.title}>
                    <Button href={item.url}>{item.title}</Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.menuItem}>
              <p className={styles.menuTitle}>Gizlilik Sözleşmesi</p>
              <ul>
                {footerMenuData['confidentialityAgreement']?.map((item) => (
                  <li key={item.title}>
                    <Button href={item.url}>{item.title}</Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.menuDescription}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend nisl justo, at aliquet enim sollicitudin et.
            Aenean sit amet tincidunt ante. Phasellus diam sapien, vulputate nec urna commodo, ornare sollicitudin ipsum.
            Etiam ultrices pellentesque enim, eu sollicitudin mauris. Donec pharetra dignissim neque, ut porta arcu pharetra et.
          </p>
        </div>
      </Container>
      <div className={styles.copyrightWrapper}>
        <p>Copyright © 2022 Loryen</p>
      </div>
    </footer>
  )
}
