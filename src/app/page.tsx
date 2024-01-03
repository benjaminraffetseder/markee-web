
import { css } from 'styled-system/css'
import { Container, HStack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'

export default function Home() {
  return (
   <main className={css({
    bg: 'white.a10'
   })}
   >
    <Container
      className={css({
        py: 5,
        px: 4,
        maxWidth: 720,
        height: '100vh',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
      })}
    >
      <h1 className={css({
        fontSize: 40,
        fontWeight: 700,
      })}>
       Markee
      </h1>
      <h2 className={css({
        fontSize: 24,
        fontWeight: 500,
      })}>
        Your reading companion
      </h2>
      <p>
        Markee is a simple app that wants to help you to keep track of your reading progress on your physical books. Add your books, create book-specific notes, or to keep quotes in one place. Forget your bookmarks.
      </p>
      <HStack gap={10} pt={2}>
        <Button variant="solid" className={css({w: 'fit-content'})} >Get started</Button>
        <Button variant="ghost" className={css({ w: 'fit-content' })} >About</Button>
      </HStack>
        </Container>
    </main>
  )
}
