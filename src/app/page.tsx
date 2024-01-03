
import { css } from 'styled-system/css'
import { Container } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'

export default function Home() {
  return (
   <main className={css({
    bg: 'white.a10'
   })}
   >
    <Container>
      <h1 className={css({
        fontSize: 40,
        fontWeight: 700,
      })}>
       Markee
      </h1>
      <p>
        Markee is a simple app that wants to help you to keep track of your reading progress on your physical books. Add your books, create book-specific notes, or to keep quotes in one place. Forget your bookmarks.
      </p>
      <Button variant="solid">Get started</Button>
        </Container>
    </main>
  )
}
