import Container from '../layouts/Container'
import styles from './product.module.css'
import * as Icons from '../icons'
import { Product } from '../index'
import { useEffect } from 'react'
import { getProducts } from '../../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductList({
  productsData,
  title = 'Tüm Ürünler',
  ...props
}) {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <Container {...props}>
      <div className={styles.productTitleContainer}>
        <div>
          <Icons.ProductTitle />
        </div>
        <p>{title}</p>
      </div>
      <div className={styles.productsContainer}>
        {loading && <p>Ürünler yükleniyor...</p>}
        {!loading &&
          productsData?.map((product) => (
            <Product key={product.id} productData={product} />
          ))}
      </div>
    </Container>
  )
}
