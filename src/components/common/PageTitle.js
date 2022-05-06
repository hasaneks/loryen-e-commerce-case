import { Container } from '../index'
import styles from "./pageTitle.module.css";

export default function PageTitle({title, ...props}){
    return(
        <div className={styles.pageTitleWrapper} {...props}>
            <Container>
                <h1>{title}</h1>
            </Container>
        </div>
    )
}