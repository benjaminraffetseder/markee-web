import { Button } from '@/components/button'
import Image from 'next/image'
import { css } from 'styled-system/css'

export default function Home() {
  return (
   <main>
      <h1 className={css({
        fontSize: 40,
      })}>
        Welcome to Markee
      </h1>
    </main>
  )
}
