import styles from './banner.module.css'
import Container from '../layouts/Container'
import { Banner } from '../index'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react";
import {getBanner} from "../../features/bannerSlice";

export default function BannerList() {
    const dispatch = useDispatch()
  const { banners } = useSelector((state) => state.banner)

    useEffect(() => {
        dispatch(getBanner())
    },[])

  return (
    <div>
      <hr className={styles.bannerHr} />
      <Container className={styles.bannerContainer}>
        {banners?.map((banner) => (
          <Banner key={banner.id} bannerData={banner} style={banner.style} />
        ))}
      </Container>
    </div>
  )
}
