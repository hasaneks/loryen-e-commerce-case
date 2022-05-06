import Link from 'next/link'
import cn from 'classnames'
import styles from './button.module.css'

function LinkButton({ children, ...props }) {
  return (
    <Link href={props.href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function DefaultButton({ children, ...props }) {
  return <button {...props}>{children}</button>
}

export default function Button({ type, className, children, ...props }) {
  const Comp = props.href ? LinkButton : DefaultButton

  return (
    <Comp className={cn(styles.baseButton, className)} {...props}>
      {children}
    </Comp>
  )
}
