import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

interface CardProps {
  id: string
  name: string
  description: string
  price: number
  rating: number
  image: string
}
export function Card({id, name, image, description, price, rating}: CardProps) {

  const bg = useColorModeValue('white', 'gray.900')
  return (
    <Center py={0}>
      <Box
        bg={bg}
        rounded={'md'}
        p={6}
        border={'1px solid gray'}
      >
        <Box
          boxSize={'sm'}
          bg={'gray.100'}
        >
          <Image
            boxSize={'285px'}
            objectFit={'cover'}
            src={image}
            alt={name}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {price}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {name}
          </Heading>
          <Text color={'gray.500'}>
            {description}
            {rating}
          </Text>
        </Stack>
      </Box>
    </Center>
  )
}
