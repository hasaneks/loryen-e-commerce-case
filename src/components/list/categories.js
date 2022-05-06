import Container from '../layouts/Container'
import * as Icons from '../icons'
import { CategoryButton } from '../index'
import { productFilterByCategory } from '../../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './category.module.css'
import {API_V1} from "../../constants/api";

export default function CategoryList({ data, ...props }) {
  const [categories, setCategories] = useState()
  const dispatch = useDispatch()
  const { activeCategory } = useSelector((state) => state.product)

  useEffect(() => {
    axios.get(`${API_V1.CATEGORY}`).then((result) => setCategories(result.data))
  }, [])

  return (
    <Container className={styles.categoriesContainer}>
      <div className={styles.categoryTitleContainer}>
        <div>
          <Icons.Category />
        </div>
        <p>Kategoriler</p>
      </div>
      <div className={styles.categoryButtonsContainer}>
        {categories?.map((category) => (
          <CategoryButton
            key={category.id}
            categoryData={category}
            isActive={category.id === activeCategory}
            onClick={() => dispatch(productFilterByCategory(category.id))}
          />
        ))}
      </div>
    </Container>
  )
}
