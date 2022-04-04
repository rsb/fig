import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { Card } from '../components/card'
import { getAllGames } from '../fake-api'

export function App() {
  return (
    <Container maxW={'container.xl'}>
      <SimpleGrid columns={3} spacing={10}>
      {getAllGames().map((x) => (
        <Card
          key={x.id}
          id={x.id}
          name={x.name}
          description={x.description}
          price={x.price}
          rating={x.rating}
          image={x.image}
        />
      ))}
      </SimpleGrid>
    </Container>
  );
}

export default App;
