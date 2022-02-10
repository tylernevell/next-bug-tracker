import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import type { BugTracker } from '../types/types';

export interface BugListTableProps {
  bugs: BugTracker[];
  onDeleteBug: Function;
}

const BugListTable = (props: BugListTableProps) => {
  const { bugs, onDeleteBug } = props;

  const resolvedPressed = (id: string) => {
    onDeleteBug(id);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Description</Th>
          <Th>Priority</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {bugs.length > 0 ? (
          bugs.map((bug) => (
            <Tr key={bug.id}>
              <Td>{bug.description}</Td>
              <Td>{bug.priority}</Td>
              <Td>
                <Button
                  size="md"
                  type="submit"
                  colorScheme="teal"
                  onClick={() => resolvedPressed(bug.id)}
                >
                  Resolved
                </Button>
              </Td>
            </Tr>
          ))
        ) : (
          <Tr>
            <Td>No bugs found.</Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};

export { BugListTable };
