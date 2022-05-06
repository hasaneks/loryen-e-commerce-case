import styles from './mobileAppBanner.module.css'
import { Button } from '../index'

export default function MobileAppBanner() {
  return (
    <div className={styles.appBannerContainer}>
      <div className={styles.imgWrapper}>
        <img
          src="/img/ibanla-mobile-app.png"
          alt="Loryen Mobile App"
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.qrWrapper}>
          <img
            src="/img/loryen-mobile-app-qr.png"
            alt="Loryen Mobile App Qr"
          />
          <div className={styles.textWrapper}>
            <p>Loryen Mobil Uygulamayı İndirin</p>
            <span>Mobil Uygulamayı QR Kod ile İndirin</span>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            href={
              'https://play.google.com/store/apps/details?id=com.limoncreatif.ibanla'
            }
          >
            <img src="/img/google-play.png" alt="Loryen Googleplay" />
          </Button>
          <Button
            href={
              'https://apps.apple.com'
            }
          >
            <img src="/img/appstore.png" alt="Loryen AppStore" />
          </Button>
        </div>
      </div>
    </div>
  )
}
