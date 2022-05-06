import { Button } from '../index'
import cn from 'classnames'
import styles from './categoryButton.module.css'

export default function CategoryButton({ categoryData, isActive = false, ...props }) {
  const { name } = categoryData
  return (
    <Button
      className={cn(styles.buttonContainer, isActive && styles.active)}
      {...props}
    >
      <span>{name}</span>
    </Button>
  )
}
