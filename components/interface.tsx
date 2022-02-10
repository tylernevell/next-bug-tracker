import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import type { BugPriority, BugTracker } from '../types/types';
import { v4 as uuidv4 } from 'uuid';
import { BugListTable } from './bug-list-table';

const Interface = () => {
  const [newBugDescription, setNewBugDescription] = useState('');
  const [newBugPriority, setNewBugPriority] = useState('Medium');
  const [bugList, setBugList] = useState<BugTracker[]>([]);

  const addBug = (event: FormEvent) => {
    event.preventDefault();
    const newBug: BugTracker = {
      id: uuidv4(),
      description: newBugDescription,
      priority: newBugPriority as BugPriority,
    };

    setBugList((bugs) => [...bugs, newBug]);

    setNewBugDescription('');
    setNewBugPriority('Medium');
  };

  const deleteBug = (id: string) => {
    const bugs = bugList.filter((bug) => bug.id !== id);

    setBugList(bugs);
  };

  return (
    <>
      <Heading size="2xl">🪲 Bug Tracker</Heading>
      <BugListTable
        bugs={bugList}
        onDeleteBug={(id: string) => deleteBug(id)}
      />
      <FormControl onSubmit={addBug}>
        <Flex>
          <FormLabel
            htmlFor="newBugDescription"
            aria-label="New Bug Description"
            w="44"
            minW="44"
            py="2"
          >
            New Bug Description:
          </FormLabel>
          <Input
            type="text"
            id="newBugDescription"
            placeholder="Enter Description"
            bg="white"
            mb="2"
            onChange={(event) => setNewBugDescription(event.target.value)}
            value={newBugDescription}
          />
        </Flex>
        <Flex>
          <FormLabel
            htmlFor="newBugPriority"
            aria-label="New Bug Priority"
            w="44"
            minW="44"
            py="2"
          >
            New Bug Priority:
          </FormLabel>
          <Select
            bg="white"
            mb="2"
            id="newBugPriority"
            value={newBugPriority}
            onChange={(event) => setNewBugPriority(event.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
        </Flex>
        <br />
        <Center>
          <Button size="md" type="submit" colorScheme="teal" onClick={addBug}>
            Add New Bug
          </Button>
        </Center>
      </FormControl>
    </>
  );
};

export { Interface };
