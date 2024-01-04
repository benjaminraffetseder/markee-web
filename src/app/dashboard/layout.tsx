import { PropsWithChildren } from 'react'
import { Container } from 'styled-system/jsx'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  // TODO: add actual page layout
  return <Container>{children}</Container>
}

export default Layout
