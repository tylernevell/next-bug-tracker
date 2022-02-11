import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Layout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <div>
      <Flex p="4">
        <Box p="2">
          <Heading size="lg">🪲</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            Sign up
          </Button>
          <Button colorScheme="teal" mr="4">
            Log In
          </Button>
        </Box>
      </Flex>
      <Layout />
    </div>
  );
};

export default Home;
