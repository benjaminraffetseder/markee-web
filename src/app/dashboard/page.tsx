import NextLink from 'next/link'
import { Box } from 'styled-system/jsx/box'
import { HStack } from 'styled-system/jsx/hstack'
import { VStack } from 'styled-system/jsx/vstack'
import { Heading } from '~/components/typography/heading'
import { Card, CardBody, CardHeader } from '~/components/ui/card'
import { Link } from '~/components/ui/link'

interface pageProps {}

const DasbhoardOverview: React.FC<pageProps> = ({}) => {
  return (
    <HStack h={'100vh'} py={5} justifyContent={'start'} alignItems={'start'}>
      <Card h={'full'} boxShadow={'2xl'}>
        <CardHeader>
          <Heading fontSize="md">Markee</Heading>
        </CardHeader>
        <CardBody>
          <Link asChild>
            <NextLink href="dashboard">Dashboard</NextLink>
          </Link>
        </CardBody>
      </Card>

      <VStack w={'full'} alignItems={'start'}>
        <Box
          w={'full'}
          borderBottom={'1px solid'}
          borderColor={'colorPalette.text'}
          py={2}
        >
          <Heading fontSize="md">Dashboard</Heading>
        </Box>
        {/* TODO: Add "Added books" section */}
      </VStack>
    </HStack>
  )
}

export default DasbhoardOverview
