import * as Icons from '../icons'
import { Button } from '../index'
import styles from './searchInput.module.css'
import { useDispatch } from 'react-redux'
import {
  productFilterByCategory,
  productFilterByName
} from '../../features/productSlice'

export default function SearchInput({}) {
  const dispatch = useDispatch()

  const search = (value) => {
    dispatch(productFilterByCategory(-1))
    dispatch(productFilterByName(value))
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchIconWrapper}>
        <Icons.Search />
      </div>
      <input
        type="text"
        placeholder={'Ürün Ara'}
        onChange={(e) => search(e.target.value)}
        onFocus={(e) => search(e.target.value)}
      />
      <Button onClick={search}>
        <span>Ara</span>
      </Button>
    </div>
  )
}
