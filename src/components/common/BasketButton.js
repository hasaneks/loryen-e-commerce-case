import * as Icons from '../icons'
import { Button } from '../index'
import styles from './basketButton.module.css'
import { useSelector } from 'react-redux'

export default function BasketButton() {
  const { basket, totalAmount } = useSelector((state) => state.basket)

  return (
    <div className={styles.basketContainer}>
      <div className={styles.basketCount}>
        <span>{basket.length}</span>
      </div>
      <Button href={'#'}>
        <Icons.Basket />
        <span>Sepetim</span>
      </Button>
      <div className={styles.freeDeliveryWrapper}>
        <div className={styles.freeDeliveryIcon}>
          <Icons.FreeDelivery />
        </div>
        <div className={styles.freeDeliveryContent}>
          {totalAmount < 500 && (
            <p>
              <span>{(500 - totalAmount).toFixed(2)} ₺</span> ürün daha ekleyin
              kargo bedava
            </p>
          )}
          {totalAmount > 500 && <p> Kargonuz Bedava </p>}
          <progress value={totalAmount} max="500" />
        </div>
      </div>
    </div>
  )
}
