import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  BannerList,
  MasterPage,
  Categories,
  ProductList
} from '../src/components/index'

import { productFilterByCategory } from '../src/features/productSlice'
import {API_V1} from "../src/constants/api";

export default function Home() {
  const [categories, setCategories] = useState()
  const [currentProducts, setCurrentProducts] = useState([])
  const [currentCategory, setCurrentCategory] = useState()
  const { products, activeCategory, searchText } = useSelector(
    (state) => state.product
  )
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${API_V1.CATEGORY}`).then((result) => setCategories(result.data))
  },[])

  useEffect(() => {
    let result = null

    if (searchText !== '' && searchText.length > 3 && activeCategory === -1) {
      result = products.filter((product) =>
        product.name.toLowerCase().includes(searchText)
      )
    } else if (activeCategory !== 0) {
      result = products.filter(
        (product) => product.category.id === activeCategory
      )
    } else if (searchText.length <= 3 && activeCategory !== -1) {
      dispatch(productFilterByCategory(0))
      result = products
    } else {
      result = products
    }
    setCurrentProducts(result)
    const currentCategoryTitle = categories?.find(
      (category) => category.id === activeCategory
    )
    setCurrentCategory(
      (currentCategoryTitle?.name === undefined && searchText.length > 3)
        ? 'Arama Sonucu'
        : currentCategoryTitle?.name
    )
  }, [activeCategory, products, searchText])

  return (
    <MasterPage>
      <Categories />
      <ProductList productsData={currentProducts} title={currentCategory} />
      <BannerList />
    </MasterPage>
  )
}
