import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button, Center } from '@chakra-ui/react'


const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="Center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
      <Button colorScheme='teal' variant='outline'>
        <Link href={linkName}>{buttonText}</Link>
    </Button>
    </Box>

  </Flex>
)

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Banner 
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="" />
      {/* <Banner purpose={'For Rent'} /> */}
    </div>
  )
}
