import { Container, Flex, VStack } from '@chakra-ui/react';
import { Interface } from './interface';

const Layout = () => {
  return (
    <Container maxW="container.xl">
      <Flex py={20}>
        <VStack
          w="full"
          h="full"
          spacing={10}
          p={10}
          alignItems="flex-start"
          bg="gray.100"
        >
          <Interface />
        </VStack>
      </Flex>
    </Container>
  );
};

export { Layout };
