import styles from './banner.module.css'
import { Button } from '../index'

export default function Banner({ bannerData, ...props }) {
    const {img,link,title,buttonText} = bannerData;
  return (
    <Button href={link} className={styles.bannerContainer} {...props}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{title}</p>
        <Button href={link}>
          <p>{buttonText}</p>
        </Button>
      </div>
    </Button>
  )
}
