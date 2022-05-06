import { Header, PageTitle, Footer, BreadCrumb, Container } from '../index'

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <PageTitle title={'Loryen H1'} />
      <Container>
        <BreadCrumb />
      </Container>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
