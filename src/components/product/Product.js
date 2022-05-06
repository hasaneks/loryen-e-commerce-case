import styles from './product.module.css'
import { Button } from '../index'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket, removeBasket } from '../../features/basketSlice'
import { useEffect, useState } from 'react'
import cn from 'classnames'

export default function Product({ productData = {} }) {
  const dispatch = useDispatch()
  const { basket } = useSelector((state) => state.basket)
  const { id, name, img, price, isFreeDelivery } = productData
  const [quantity, setQuantity] = useState(0)

  const addProduct = () => {
    dispatch(addBasket(productData))
  }

  const removeProduct = () => {
    dispatch(removeBasket(productData))
  }

  useEffect(() => {
    const activeProduct = basket.find((product) => product.id === id)
    setQuantity(
      activeProduct?.quantity === undefined ? 0 : activeProduct.quantity
    )
  }, [basket])

  const addBasketButton = () => {
    if (quantity === 0) {
      return (
        <Button
          className={cn(styles.baseButton, styles.firstButton)}
          onClick={() => addProduct()}
        >
          <span>Sepete Ekle</span>
        </Button>
      )
    } else {
      return (
        <div className={cn(styles.baseButton, styles.counterButton)}>
          <Button onClick={removeProduct}>
            <span style={{ marginTop: '-5px' }}>-</span>
          </Button>

          <span className={styles.quantityText}>{quantity}</span>

          <Button onClick={addProduct}>
            <span>+</span>
          </Button>
        </div>
      )
    }
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImg}>
        <picture>
          <img src={img} alt={name} />
        </picture>
      </div>

      <div className={styles.productContent}>
        <p className={styles.productName}>{name}</p>
        <p className={styles.freeDelivery}>
          {isFreeDelivery && 'Ücretsiz Teslimat'}
        </p>
        <span>{price} ₺</span>
      </div>

      <div className={styles.addBasketButton}>{addBasketButton()}</div>
    </div>
  )
}
