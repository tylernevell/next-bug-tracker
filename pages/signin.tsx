import { Container, Flex, VStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

const SignIn = () => {
  const { data: session } = useSession();

  return (
    <Container maxW="container.xl">
      <Flex py={20}>
        <VStack
          w="full"
          h="full"
          spacing={10}
          p={10}
          alignItems="flex-start"
          bg="gray.50"
        ></VStack>
      </Flex>
    </Container>
  );
};

export default SignIn;
